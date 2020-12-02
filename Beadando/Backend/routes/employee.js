var express = require('express');
var router = express.Router();
let MongoClient =require('mongodb').MongoClient;
let url = "mongodb+srv://momsz:45TtSckzlyApU0v3@cluster0.apeyl.mongodb.net/myDatabase?retryWrites=true&w=majority";

//var db= require('../server/database/dbController')

/* GET element listing. */
//List All
router.get('/', function(req, res, next) {
  MongoClient.connect(url,function (err,db){
    if(err) throw err;
    let dbo=db.db("mydb");
    dbo.collection("Employee").find({}).toArray(function (err,result) {
      if (err) throw err;
      db.close();
      res.send(result);
    })
  })
});
/* DELETE element listing. */
//Delete in id
router.delete('/delete',function (req,res) {
  MongoClient.connect(url,function (err,db){
    if(err) throw err;
    let dbo=db.db("mydb");
    dbo.collection("Employee").deleteOne(id,function (err,result) {
      if (err) throw err;
      console.log(result.insertedCount+" elem törölve");
      db.close();
      res.send("ok");
    })
  })
});
/* GET one element listing. */
//Find one element
router.get('/findOne',function (req,res) {
  var id={
    '_id':"5fc11f17e998bd079172b1d8"
  }
  MongoClient.connect(url,function (err,db) {
    if(err) throw err;
    let dbo=db.db("mydb");
    dbo.collection("Employee").find({_id:'5fc11f17e998bd079172b1d9'}).toArray(function (err,result) {
      if (err) throw err;
      console.log(result);
      db.close();
      res.send(result);
    })
  })
});
/* Post one element to list. */
//Add one element
router.post('/add',function (req,res) {
  var mit={name: 'Gibsz Jakab Junior',address:'Gibszfalva'}
  MongoClient.connect(url,function (err,db){
    if(err) throw err;
    let dbo= db.db("mydb");
    dbo.collection("Employee").insertOne(mit,function (err,res){
      if(err) throw err;
      console.log(res.insertedCount+" Elem beillesztve az adatbázisba")
      db.close();
      res.send("ok");
    })
  })
});
/* Update one element to list. */
//Update one element
router.put('/update',function (req,res) {
  let id={ address: "Gibszfalva" };
  let mire={ $set: {name: "Mickey", address: "Canyon 123" } };
  MongoClient.connect(url,function (err,db){
    if(err) throw err;
    let dbo=db.db("mydb");
    dbo.collection("Employee").updateOne(id,mire,function (err,result) {
      if (err) throw err;
      db.close();
      res.send("ok");
    })
  })
})
module.exports = router;
