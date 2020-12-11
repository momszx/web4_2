let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://momsz:45TtSckzlyApU0v3@cluster0.apeyl.mongodb.net/myDatabase?retryWrites=true&w=majority";

let user = [
    {name: 'Gibsz Jakab', email: 'gibszJakab@gmail.com', password: "password"},
    {name: 'Teszt Elek', email: 'tesztElek@gmail.com', password: "password"}
];
MongoClient.connect(url,function (err,db){
    if(err) throw err;
    console.log("Adatbázis létrehozva");
    let dbo = db.db("mydb");
    dbo.collection("User").drop(function (err,delOK){
        if(err) throw err;
        if(delOK){
            console.log("Régi User adatbázis törölve")

        }
    })
});