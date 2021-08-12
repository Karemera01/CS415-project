
// const express = require('express')
// const app = express()
// const mongoose = require("mongoose")
// const UserModel = require("./models/book")
// const dburl="mongodb://localhost:27017/MyLibraryBooks-DB";

// mongoose.connect(dburl,{ useNewUrlParser: true, useUnifiedTopology: true },(error)=>{
//     if(error)throw error
//     else
//     console.log("connected");
// }
//     );
// app.use(express.urlencoded({extended: true}))

// // app.set("view engine", "ejs")

// app.get("/citylibrary/api/book/list", (req, res)=>{
//     res.render("booklist")
// })
// app.post("/citylibrary/api/book/add", (req, res)=>{
//     const SaveUser = new UserModel(req.body)
//     SaveUser.save((error, savedUser)=>{
//         if(error) throw error
//         res.json(savedUser)
//     })
// })
// app.listen(3000, ()=>{
//     console.log("listening to port 3000")
// })

require('./models/book');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const bookController = require('./controllers/bookController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('client', path.join(__dirname, '/client/'));
app.engine('html', exphbs());
app.set('view engine', 'html');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/book', bookController);