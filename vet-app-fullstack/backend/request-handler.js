const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const enrutador = require('./enrutador');

module.exports = (req, res) => {

    // obtener url desde el objeto request req.url
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual, true);
  
    // obtener la ruta
    const ruta = urlParseada.pathname;
  
    // quitar slash
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, "");
  
    // obtener el metodo http
    const metodo = req.method.toLowerCase();
    // dar permisos de CORS escribiendo los headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Request-Methods","OPTIONS ,GET ,PUT , DELETE , POST");
    res.setHeader("Access-Control-Allow-Methods","OPTIONS ,GET ,PUT , DELETE , POST");
    res.setHeader("Access-Control-Allow-Headers","*");
    // dar respuesta inmediata cuando sean options
    if (metodo === "options") {
      res.writeHead(200);
      res.end();
      return;     
    }
    // obtener variables del query url
    const { query = {} } = urlParseada;
    // obtener los headers
    const { headers = {} } = req;
    // obtener payload en el caso de haber uno
    const decoder = new StringDecoder('utf-8');
    let buffer = "";
    req.on("data", (data) => {
      buffer += decoder.write(data);
  
    });
  
    req.on("end", () => {
      buffer += decoder.end();
  
      if (headers["content-type"] === 'application/json') {
        buffer=JSON.parse(buffer);
      }
      if(rutaLimpia.indexOf("/") > -1){
        // separar las rutas
        var [rutaPrincipal , indice] = rutaLimpia.split('/');
      }
      const data = {
        indice,
        ruta: rutaPrincipal || rutaLimpia,
        metodo,
        query,
        headers,
        payload: buffer
      }
  
     
      console.log({ data })
  
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
  
    });
  
  }
  
  