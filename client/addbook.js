document.getElementById("submit").onclick = function (event) {
  const btnId = this.dataset.id;
  event.preventDefault();
  if (btnId) {
    fetch("http://localhost:3000/books/" + btnId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: document.getElementById("title").value,
        ISBN: document.getElementById("ISBN").value,
        publishDate: document.getElementById("publishDate").value,
        author: document.getElementById("author").value,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.error !== "unauthorize") {
          document.getElementById("form-title").textContent = "Add a Book";
          document.getElementById("add_form").reset();
          document.getElementById("addBtn").dataset.id = "";
          location.reload();
        } else {
          alert(res.error + " to update");
        }
      });
  } else {
    addNewBook();
  }
};


//fetch all books
async function fetchAllBooks() {
const books = await (
  await fetch("http://localhost:3000/books", {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  })
).json();
const bookDisplay = document.getElementById("display-book");
books.forEach((data) => {
  displayToClient(bookDisplay, data);
});
}
function addNewBook() {
{
  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    body: JSON.stringify({
      title: document.getElementById("title").value,
      ISBN: document.getElementById("ISBN").value,
      publishDate: document.getElementById("publishDate").value,
      author: document.getElementById("author").value,
      price: document.getElementById("price").value,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      console.log(data.error === "unauthorize");
      if (data.error !== "unauthorize") {
        const bookContainer = document.createElement("div");
        bookContainer.style.display = "flex";
        const bookDisplay = document.getElementById("display-book");
        console.log(data[0]);
        displayToClient(bookDisplay, data[0]);
      } else {
        alert(data.error + " to add new books only admin can do");
      }
    });
}
}