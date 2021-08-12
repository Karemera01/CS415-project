var router = express.Router();
const Bookscollection = mongoose.model('Bookscollection');

router.get('/', (req, res) => {
    res.render("client/addbook", {
        viewTitle: "Insert Book"
    });
});

router.post('/', (req, res) => {
        insertRecord(req, res);
       
});

router.get('/list', (req, res) => {
    Bookscollection.find((err, docs) => {
        if (!err) {
            res.render("client/booklist", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving book list :' + err);
        }
    });
});
