var MongoClient =require('mongodb').MongoClient;
var url = "mongodb+srv://momsz:45TtSckzlyApU0v3@cluster0.apeyl.mongodb.net/myDatabase?retryWrites=true&w=majority";
MongoClient.connect(url,function (err,db){
    if(err) throw err;
    console.log("%cAdatbázis létrehozva",'background: #ffffff; color: #bada55');
    var dbo= db.db("mydb");
    db.collection("Employee").findOne({},function (err,res){
        if (err) throw err;
        console.log("%cAllkalmazott gyüjtemény létrehozva",'background: #222; color: #bada55')
        db.close();
    })
});