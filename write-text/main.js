var fs = require('fs');

fs.writeFile('demo.txt', 'Nasir Hussain ', function (err) {
    if(err){
        return console.log(err);
    }
    console.log("file created");
});