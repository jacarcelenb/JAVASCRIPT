//console.log("hola mundo");
// comando node seguido del nombre del archivo.js ejecuta ese archivo en node js
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

let recursos = {
  mascotas: [
    { tipo: "perro", nombre: "Trusky", propietario: "Camilo" },
    { tipo: "perro", nombre: "Trusky", propietario: "Camilo" },
    { tipo: "perro", nombre: "Trusky", propietario: "Camilo" },
    { tipo: "perro", nombre: "Trusky", propietario: "Jorge" }]
}


const server = http.createServer((req, res) => {

  // obtener url desde el objeto request req.url
  const urlActual = req.url;
  const urlParseada = url.parse(urlActual, true);

  // obtener la ruta
  const ruta = urlParseada.pathname;

  // quitar slash
  const rutaLimpia = ruta.replace(/^\/+|\/+$/g, "");

  // obtener el metodo http
  const metodo = req.method.toLowerCase();
  // obtener variables del query url
  const { query = {} } = urlParseada;
  // obtener los headers
  const { headers } = req;
  // obtener payload en el caso de haber uno
  const decoder = new StringDecoder('utf-8');
  let buffer = "";
  req.on('data', (data) => {
    buffer += decoder.write(data);

  });

  req.on('end', () => {
    buffer += decoder.end();


    if (headers['Content-Type'] == 'application/json') {
      buffer = JSON.parse(buffer);
    }
  });

  

  const data = {
    ruta: rutaLimpia,
    metodo,
    query,
    headers,
    payload: buffer
  }

  const enrutador = {
    ruta: (data, callback) => {
      callback(200, { mensaje: "esta es /ruta" });
    },
    mascotas: {
      get: (data, callback) => {
        callback(200, recursos.mascotas);
      },
      post: (data, callback) => {
        recursos.mascotas.push(data.payload);
        callback(201, data.payload);
      },
    },
    noEncontrado: (data, callback) => {
      callback(404, { mensaje: "no encontrado" });
    }
  }



  // elegir el manejador de la respuesta
  let handler;
  if (data.ruta && enrutador[data.ruta] && enrutador[data.ruta][metodo]) {
    handler = enrutador[data.ruta][metodo];
  } else {
    handler = enrutador.noEncontrado;
  }

  // ejecutar handler para enviar la respuesta
  if (typeof handler == 'function') {
    handler(data, (status = 200, mensaje) => {
      const respuesta = JSON.stringify(mensaje);
      res.setHeader('Content-Type', 'application/json')
      res.writeHead(status)
      // linea donde realmente se responde a la aplicacion cliente
      res.end(respuesta)
    })
  }

console.log(data)

});

server.listen(8000, () => {
  console.log('server listen in http://localhost:8000/');
});

