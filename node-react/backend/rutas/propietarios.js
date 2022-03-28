module.exports = function propietariosHandler(propietarios) {
    return {
        get: (data, callback) => {
          if (data.indice) {
            if (propietarios[data.indice]) {
              return callback(200, propietarios[data.indice]);
            }
            return callback(404, { mensaje: `propietario con indice ${data.indice} no encontrado` });
          }

          if (data.query && typeof data.query.nombre !=="undefined" || 
          data.query.apellido !== "undefined" ||
          data.query.documento !== "undefined") {
           const llavesQuery = Object.keys(data.query);
           let respuestaVeterinarios = [...veterinarios];
           for(const llave of llavesQuery){
             respuestaVeterinarios = respuestaVeterinarios.filter((_veterinario)=>{
               const expresionRegular = new RegExp(data.query[llave],"ig");
               const resultado = _veterinario[llave].match(expresionRegular);
               return resultado ;
             });
           }
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