var http= require('http');
var port =1337;
http.createServer(function(req,res){
    res.setHeader('context-type','plain-text');
    res.end('helloWorld');
}).listen(port);