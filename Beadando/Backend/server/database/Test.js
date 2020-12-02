let MongoClient =require('mongodb').MongoClient;
let url = "mongodb+srv://momsz:45TtSckzlyApU0v3@cluster0.apeyl.mongodb.net/myDatabase?retryWrites=true&w=majority";
var id={
    name:"Gibsz Jakab Junior"
}
MongoClient.connect(url,function (err,db) {
    if(err) throw err;
    let dbo=db.db("mydb");
    dbo.collection("Employee").find(id).toArray(function (err,result) {
        if (err) throw err;
        console.log(result);
        db.close();
    })
})