//console.log("hola mundo");
// comando node seguido del nombre del archivo.js ejecuta ese archivo en node js
const http = require('http');
const url = require('url');
const server = http.createServer((req ,res)=>{
   
    // obtener url desde el objeto request req.url
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual,true);
    
    // obtener la ruta
    const ruta = urlParseada.pathname;

    // quitar slash
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, "");

    // obtener el metodo http
    console.log('metodo http ',req.method)

    // obtener variables del query url
    const {query = {}} = urlParseada;
    console.log({query});
    // enviar una respuesta dependiendo de la ruta
   switch (rutaLimpia) {
       case 'ruta':
           res.end('estas en la ruta conocida')
           break;
       default:
           res.end('ruta desconocida')
           break;

   }

    //res.end();
});
server.on('clientError',(err,socket)=>{
    socket.end('HTTP/1.1 400 Bad Request \r\n\r\n');
});
server.listen(8000 , () =>{
    console.log('server listen in http://localhost:8000/');
});
