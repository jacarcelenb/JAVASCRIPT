module.exports = function propietariosHandler(propietarios) {
    return {
        get: (data, callback) => {
          if (data.indice) {
            if (propietarios[data.indice]) {
              return callback(200, propietarios[data.indice]);
            }
            return callback(404, { mensaje: `propietario con indice ${data.indice} no encontrado` });
          }

          if (data.query && data.query.nombre|| 
          data.query.apellido ||
          data.query.documento) {
           const llavesQuery = Object.keys(data.query);
           let respuestaVeterinarios = [...veterinarios];
           respuestaVeterinarios = respuestaVeterinarios.filter((_veterinario)=>{
           let resultado = false;
           for(const llave of llavesQuery){
              const busqueda = palabrasSinAcentos(data.query[llave])
               const expresionRegular = new RegExp(busqueda,"ig");
               const campoDuenoSinAcentos = palabrasSinAcentos(_propietario[llave])
               resultado = campoDuenoSinAcentos.match(expresionRegular);
             
             if (resultado) {
               break;
             }
             
           }
             return resultado ;
          });
          return callback(200,respuestaVeterinarios)
          }

          callback(200, propietarios);
        },
        post: (data, callback) => {
          propietarios.push(data.payload);
          callback(201, data.payload);
        },
        put: (data, callback) => {
          if (data.indice) {
            if (propietarios[data.indice]) {
              propietarios[data.indice] = data.payload;
              return callback(200, propietarios[data.indice]);
            }
            return callback(404, { mensaje: `propietario con indice ${data.indice} no encontrado` });
          }
          callback(400, { mensaje: "no se ha enviado el indice" });
        },
        delete: (data, callback) => {
          if (data.indice) {
            if (propietarios[data.indice]) {
              propietarios = propietarios.filter((_propietario,indice)=> indice != data.indice) ;
              return callback(204,{ mensaje: `propietario con indice ${data.indice} eliminada` });
            }
            return callback(404, { mensaje: `propietario con indice ${data.indice} no encontrado` });
          }
          callback(400, { mensaje: "no se ha enviado el indice" });
        },
      }
}