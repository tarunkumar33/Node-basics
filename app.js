const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("tarun");
});

server.listen(4000);
