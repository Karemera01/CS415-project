const mongoose=require(`mongoose`);

const dburl="mongodb://localhost:27017/MyLibraryBooks-DB";

mongoose.connect(dburl,{ useNewUrlParser: true, useUnifiedTopology: true });

const Schema =mongoose.Schema;

const bookSchema=new Schema({
    "ISBN":{
        type:String,required:true
    },
    "Book Title":{
        type:String,required:true
    },
    "Overdue Fee":{
        type:String,required:false
    },
    "Publisher":{
        type:String,required:false
    },
    "Date Published":{
        type:String,required:false
    },
});

const Bookscollection= mongoose.model("Bookscollection",bookSchema);



module.exports=Bookscollection;

 
 