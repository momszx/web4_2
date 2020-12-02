let MongoClient =require('mongodb').MongoClient;
let url = "mongodb+srv://momsz:45TtSckzlyApU0v3@cluster0.apeyl.mongodb.net/myDatabase?retryWrites=true&w=majority";
/*class dbController {
    Insert(mit) {
        MongoClient.connect(url,function (err,db){
            if(err) throw err;
            let dbo= db.db("mydb");
            dbo.collection("Employee").insertMany(mit,function (err,res){
                if(err) throw err;
                console.log(res.insertedCount+" Elem beillesztve az adatbázisba")
                db.close();
            })
        })
    }
    Find(id){
        MongoClient.connect(url,function (err,db) {
            if(err) throw err;
            let dbo=db.db("mydb");
            dbo.collection("Employee").find(id).toArray(function (err,result) {
                if (err) throw err;
                console.log(result);
                db.close();
            })
        })
    }
    FindAll(){
        MongoClient.connect(url,function (err,db){
            if(err) throw err;
            let dbo=db.db("mydb");
            dbo.collection("Employee").find({}).toArray(function (err,result) {
                if (err) throw err;
                //console.log(result);
                return(result);
                db.close();
            })
        })
    }
    Delete(id){
        MongoClient.connect(url,function (err,db){
            if(err) throw err;
            let dbo=db.db("mydb");
            dbo.collection("Employee").deleteOne(id,function (err,result) {
                if (err) throw err;
                console.log(result.insertedCount+" elem törölve");
                db.close();
            })
        })
    }
    Update(id,mire){
        MongoClient.connect(url,function (err,db){
            if(err) throw err;
            let dbo=db.db("mydb");
            dbo.collection("Employee").updateOne(id,mire,function (err,result) {
                if (err) throw err;
                console.log(result.insertedCount+" elem frissitve");
                db.close();
            })
        })
    }
}*/
exports.FindAll=function (){

    MongoClient.connect(url,function (err,db){
        if(err) throw err;
        let dbo=db.db("mydb");
        dbo.collection("Employee").find({}).toArray(function (err,result) {
            if (err) throw err;
            //console.log(result);
            db.close();
            asd= result;
        })
    })
    return asd
}
