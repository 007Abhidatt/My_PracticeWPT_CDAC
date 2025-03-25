var My_module =require('./My_module')
var server=My_module.createServer((req,res)=>{
    var a=10;
    var b=20;
    var result=My_module.sum(a,b);
    res.write(`sum of ${a} and ${b} is ${result} `)
    res.end();
    

    
});
server.listen(5000);
