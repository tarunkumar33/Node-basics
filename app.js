const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("tarun");
    let str='Welcome to my Node Js project';
    switch(req.url){
        case '/home':
            str='Welcome home';
            break;
        case '/about':
            str='Welcome to About Us page';
            break;
        case '/node':
            str='Welcome to my Node Js project';
            break;

    }
    res.write('<html>');
    res.write(`<body><h1>${str}</h1></body></html>`);
    res.end();
});

server.listen(4000);

console.log("hi");
