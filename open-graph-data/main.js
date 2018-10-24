var ograph = require('open-graph');

ograph('http://ogp.me/',function (err,result) {
    console.log(err);
    console.log(result);
});