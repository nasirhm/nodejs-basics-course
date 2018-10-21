var dns = require('dns');

dns.lookup('https://wikipedia.com',function onLookup(err, address, family) {
    console.log("Address", address);
    dns.reverse(address, function (err, hostnames) {
        
    })

})