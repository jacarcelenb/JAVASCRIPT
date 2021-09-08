//console.log("hola mundo");
// comando node seguido del nombre del archivo.js ejecuta ese archivo en node js
const http = require('http');
const server = http.createServer((req ,res)=>{
    res.end();
});
server.on('clientError',(err,socket)=>{
    socket.end('HTTP/1.1 400 Bad Request \r\n\r\n');
});
server.listen(8000);
