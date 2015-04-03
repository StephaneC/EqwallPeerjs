var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
  port: 9000,
  ssl: {
    key: fs.readFiileSync('/config/eqwall.key'),
    cert: fs.readFileSync('/config/eqwall.crt')
  }
});
