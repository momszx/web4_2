var express = require('express');
var router = express.Router();
const dbController = require('../server/database/dbController');

/* GET users listing. */
router.get('/employee', function(req, res, next) {
    console.log("Employee");
    var app=()=>{
        dbController.dbController.listAll
    }
    res.send('respond with a resource');
});

module.exports = router;