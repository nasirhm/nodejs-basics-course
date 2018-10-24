var mongoClient = require('mongodb');
var format = require('util').format;

mongoClient.connect('mongodb://127.0.0.1:27017',function (err,db) {
    if(err){
        console.log(err);
    }else{
        console.log("Connected");
    }
    db.close();
});