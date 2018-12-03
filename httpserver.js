var http=require("http");

var server=http.createServer(function(request,response){

console.log("Hello Node JS");
});

server.listen(3000);
