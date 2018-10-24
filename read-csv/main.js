var fs  = require('fs');

var csv = require('fast-csv');

fs.createReadStream('my.csv')
    .pipe(csv())
    .on('data', function(data){
        console.log(data);
    })
    .on('end',function (data) {
        console.log("Read Finished");        
    })
    .on('error', function(data){
        console.log("Error");
    });