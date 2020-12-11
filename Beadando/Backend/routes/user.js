var express = require('express');
var router = express.Router();
const MongoClient =require('mongodb').MongoClient;
const url = "mongodb+srv://momsz:yaKLfIBPPeaFb332@cluster0.apeyl.mongodb.net/myDatabase?retryWrites=true&w=majority"
const mongodb = require('mongodb');

/* GET user page. */
router.get('/',(req ,res)=>{
  MongoClient.connect(url,function (err,db) {
    if (err) throw err;
    let dbo=db.db("mydb");
    dbo.collection("User").findOne(req.body,function (err,result) {
      if (err) throw err;
      db.close();
      res.send(result);
    })
  })
})
router.post('/add',(req ,res)=>{
  MongoClient.connect(url,function (err,db) {
    if (err) throw err;
    let dbo=db.db("mydb");
    dbo.collection("User").insertOne(req.body,function (err,res) {
      if(err)throw err;
      console.log(res.insertedCount+" Elem beillesztve az adatbázisba")
      db.close();
    })
  })
  res.status(200).send();
})


module.exports = router;
