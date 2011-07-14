var fcgiApp = require("./fcgi"),
    http = require("http"),
    hello = require("./hello");

var myServer = http.createServer(hello.urls);

// Instead of this:
//myServer.listen(12345);

// You do this:
fcgiApp.handle(myServer);
