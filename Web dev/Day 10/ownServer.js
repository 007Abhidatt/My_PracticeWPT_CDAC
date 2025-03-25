var http = require('http')
var port=4500; //or const PORT=4500
var server = http.createServer((req, resp)=>{
resp.write("Hello from My server");
resp.end();

});
server.listen(port); //(PORT)
// ---------------------------------------------------------------------------



