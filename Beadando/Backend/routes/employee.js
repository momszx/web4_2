const express = require('express');
const router = express.Router();
const MongoClient =require('mongodb').MongoClient;
const url = "mongodb+srv://momsz:45TtSckzlyApU0v3@cluster0.apeyl.mongodb.net/myDatabase?retryWrites=true&w=majority";
const mongodb = require('mongodb');
const httpStatus = require('http-status-codes');

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
  let id = new mongodb.ObjectID("5fc7e52258b20e2a69b041da");
  MongoClient.connect(url,function (err,db){
    if(err) throw err;
    let dbo=db.db("mydb");
    dbo.collection("Employee").deleteOne(id,function (err,result) {
      if (err) throw err;
      console.log(result.insertedCount+" elem törölve");
      db.close();
      res.status(200);
    })
  })
});
/* GET one element listing. */
//Find one element
router.get('/findOne',function (req,res) {
  let id = new mongodb.ObjectID("5fc7e52258b20e2a69b041da");
  MongoClient.connect(url,function (err,db) {
    if(err) throw err;
    let dbo=db.db("mydb");
    dbo.collection("Employee").find({_id:id}).toArray(function (err,result) {
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
  let mit={name: 'Gibsz Jakab Junior',address:'Gibszfalva'}
  MongoClient.connect(url,function (err,db){
    if(err) throw err;
    let dbo= db.db("mydb");
    dbo.collection("Employee").insertOne(mit,function (err,res){
      if(err) throw err;
      console.log(res.insertedCount+" Elem beillesztve az adatbázisba")
      db.close();
      res.status(200);
    })
  })
});
/* Update one element to list. */
//Update one element
router.put('/update',function (req,res) {
  let id = new mongodb.ObjectID("5fc7e52258b20e2a69b041da");
  let mire={ $set: {name: "Mickey", address: "Canyon 123" } };
  MongoClient.connect(url,function (err,db){
    if(err) throw err;
    let dbo=db.db("mydb");
    dbo.collection("Employee").updateOne(id,mire,function (err,result) {
      if (err) throw err;
      db.close();
      res.status(200);
    })
  })
})
module.exports = router;
