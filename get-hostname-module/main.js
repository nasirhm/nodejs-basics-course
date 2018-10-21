var dns = require('dns');

dns.lookup('www.wikipedia.org',function onLookup(err, address, family) {
    console.log("Address : ", address);
    dns.reverse(address, function (err, hostnames) {
        if(err){
            console.log(err.stack);
        }
        console.log("Reserve for Address : "+address+" : "+JSON.stringify(hostnames));
    });
});