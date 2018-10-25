var fs = require('fs');

var xml2js = require('xml2js');

var parser = new xml2js.Parser();

fs.readFile('sample_xml.xml',function (err, data) {

    parser.parseString(data, function (err, result) {
        console.log(result);
    });

});