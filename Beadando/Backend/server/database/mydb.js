let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://momsz:45TtSckzlyApU0v3@cluster0.apeyl.mongodb.net/myDatabase?retryWrites=true&w=majority";
let myobj = [
    {name: 'Gibsz Jakab', address: 'Gibszfalva', dateOfBirth: "1999-05-01"},
    {name: 'Teszt Elek', address: 'Tesztfalva', dateOfBirth: "1995-05-01"}
];
MongoClient.connect(url,function (err,db){
    if(err) throw err;
    console.log("%cAdatbázis létrehozva",'background: #ffffff; color: #bada55');
    let dbo = db.db("mydb");
    dbo.collection("Employee").drop(function (err,delOK){
        if(err) throw err;
        if(delOK){
            console.log("Régi adatbázis törölve")
            dbo.createCollection("Employee",function (err,res){
                if (err) throw err;
                console.log("%cAllkalmazott gyüjtemény létrehozva",'background: #222; color: #bada55');
                dbo.collection("Employee").insertMany(myobj,function (err,res){
                    if(err) throw err;
                    console.log(res.insertedCount+" Elem beillesztve az adatbázisba")
                    db.close();
                })
            })
        }
    })

});