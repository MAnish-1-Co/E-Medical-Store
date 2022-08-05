const http=require('http');
const fs = require('fs');

const hostname='127.0.0.1';
const port=3000;

const home=fs.readFileSync('index.html');
const login=fs.readFileSync('./login.html');
const contact=fs.readFileSync('./contact.html');

const server=http.createServer((req, res)=>{
    console.log(req.url);
    url=req.url;
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    if(url=='index'){
        res.end(home);
    }
    else if(url=='/contact'){
        res.end(contact);
    }
    else if(url=='/login'){
        res.end(login);
    }
    else{
        res.statusCode=404;
        res.end("<h1> 404 not found</h1>");
    }
});

server.listen(port, hostname, ()=>{
    console.log('Server running at http://${hostname} : $ {port}/');
});

//4th part
/*const http=require('http');
const fs = require('fs');
const fileContent= fs.readFileSync('login.html');

const server=http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent);
});

server.listen(80,'127.0.0.1',()=>{
    console.log("listening on port 80");
});
*/
//3rd part

// const  fs= require("fs");
// let text= fs.readFile("del.txt","utf-8",(a,b)=>{
//     console.log(a,b);
// });
// console.log("This is  a message");


//2nd part
// const fs=require("fs");
// let text=fs.readFileSync("del.txt","utf-8");
// text=text.replace("Manish","Abhay");
// console.log("The content of file");
// console.log(text);

// console.log("Creating a new file");
// fs.writeFileSync("abhay.txt",text);

//1nd part

// const http = require('http');
 
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('login.html');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });