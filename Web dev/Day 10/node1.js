const http=require('http')
const server=http.createServer((request , response)=>{
    var a=10;
    var b=20;

    response.write(`sum of ${a} and ${b} is ${a+b}`);
     response.end(); // if not done this browser will wait to for server to terminate/ end


});
server.listen(500);
