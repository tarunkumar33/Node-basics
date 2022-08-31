const fs = require('fs');

const requestHandler=(req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
      fs.readFile('message.txt',(err,data)=>{
          console.log(data.toString());
          res.write('<html>');
          res.write('<head><title>Enter Message</title><head>');
          res.write(`<body><form action="/message" method="POST"><h1>${data.toString()}</h1><input type="text" name="message"><button type="submit">Send</button></form></body>`);
          res.write('</html>');
           res.end();
      });
      return;
  
  
    }
    if (url === '/message' && method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
      //   fs.writeFileSync('message.txt', message);
      
      //   fs.writeFile('message.txt', message,(err)=>{
      //     res.statusCode = 302;
      // res.setHeader('Location', '/');
      // res.end();
      //   });
  
      fs.appendFile('message.txt', message,(err)=>{
          res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
        });
      });
      
      return;
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
  }

  module.exports=requestHandler;
  //multiple exports we mention all in object

// module.exports={
//     handler:requestHandler,
//     someText:'hello'
// };

// module.exports.handler=requestHandler;

