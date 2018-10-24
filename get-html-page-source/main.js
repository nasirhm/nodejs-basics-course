var request = require('request');

request({
    uri:'http://nasirhussain.me'
},function(err,res,body){
    console.log(body);
});