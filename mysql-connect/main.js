var mySql = require('mysql');

var con = mySql.createConnection(
    {
        host: '<YOUR_HOSTNAME_HERE>',
        user: '<YOUR_USERNAME_HERE>',
        password: '<YOUR_PASSWORD_HERE>',
        database: '<YOUR_DATABASE_HERE>'
    }
);

//select query
con.query('select * from <TABLE_NAME>',function (err,rows,fields) {
    if(!err){
        console.log(rows);
    }else{
        console.log(err);
    }
});

//ending the connection
con.end();