var http = require('http');
var port=process.env.PORT || 8657

var server=http.createServer((req,res)=>{
    res.write("<h1>Hii from NodeJs Server</h1>");
    res.end();
})

server.listen(port)

// http://localhost:8765/