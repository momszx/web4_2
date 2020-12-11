let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://momsz:yaKLfIBPPeaFb332@cluster0.apeyl.mongodb.net/myDatabase?retryWrites=true&w=majority"
let myobj = [
    {name: 'Gibsz Jakab', address: 'Gibszfalva', dateOfBirth: "1999-05-01"},
    {name: 'Teszt Elek', address: 'Tesztfalva', dateOfBirth: "1995-05-01"}
];
let user = [
    {name: 'Gibsz Jakab', email: 'gibszJakab@gmail.com', password: "password"},
    {name: 'Teszt Elek', email: 'tesztElek@gmail.com', password: "password"}
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
                console.log("Employee gyüjtemény létrehozva");
                dbo.collection("Employee").insertMany(myobj,function (err,res){
                    if(err) throw err;
                    console.log(res.insertedCount+" Elem beillesztve az Employee gyüjteménybe")
                })
            })
            dbo.createCollection("User",function (err,res){
                if (err) throw err;
                console.log("User gyüjtemény létrehozva");
                dbo.collection("User").insertMany(user,function (err,res){
                    if(err) throw err;
                    console.log(res.insertedCount+" Elem beillesztve az User gyüjteménybe")
                    db.close();
                })
            })
        }
    })
});
