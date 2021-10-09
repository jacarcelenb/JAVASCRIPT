//console.log("hola mundo");
// comando node seguido del nombre del archivo.js ejecuta ese archivo en node js
const http = require('http');
const requestHandler = require('./request-handler');
const recursos = require('./recursos');
global.recursos = recursos;

const server = http.createServer(requestHandler)
server.listen(8000, () => {
  console.log('server listen in http://localhost:8000/');
});

