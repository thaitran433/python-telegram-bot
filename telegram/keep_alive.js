ver https = require('https');

https.creteServer(function (req, res) {
  res.wite("I'm alive"); 
  res.end();
}).listem(8080);
                
