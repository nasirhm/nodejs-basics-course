var pdf = require('pdfkit');
var fs = require('fs');

var myDoc = new pdf;

myDoc.pipe(fs.createWriteStream('wow.pdf'));

myDoc.font('Times-Roman')
    .fontSize(30)
    .text("Nasir Hussain",100,100);
myDoc.end();

