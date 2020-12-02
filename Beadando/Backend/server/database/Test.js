const MongoClient =require('mongodb').MongoClient;
const url = "mongodb+srv://momsz:45TtSckzlyApU0v3@cluster0.apeyl.mongodb.net/myDatabase?retryWrites=true&w=majority";
const mongodb = require('mongodb');
var id={
    name:"Gibsz Jakab Junior"
}
MongoClient.connect(url,function (err,db) {
    if(err) throw err;
    let dbo=db.db("mydb");
    var id = new mongodb.ObjectID("5fc11f17e998bd079172b1d9");
    dbo.collection("Employee").find({_id:id}).toArray(function (err,result) {
        if (err) throw err;
        console.log(result);
        db.close();
    })
})