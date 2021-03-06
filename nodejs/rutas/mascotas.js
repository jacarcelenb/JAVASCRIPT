module.exports = function mascotasHandler(mascotas) {
    return {
        get: (data, callback) => {
          if (data.indice) {
            if (mascotas[data.indice]) {
              return callback(200, mascotas[data.indice]);
            }
            return callback(404, { mensaje: `mascota con indice ${data.indice} no encontrado` });
          }
          callback(200, mascotas);
        },
        post: (data, callback) => {
          mascotas.push(data.payload);
          callback(201, data.payload);
        },
        put: (data, callback) => {
          if (data.indice) {
            if (mascotas[data.indice]) {
              mascotas[data.indice] = data.payload;
              return callback(200, mascotas[data.indice]);
            }
            return callback(404, { mensaje: `mascota con indice ${data.indice} no encontrado` });
          }
          callback(400, { mensaje: "no se ha enviado el indice" });
        },
        delete: (data, callback) => {
          if (data.indice) {
            if (mascotas[data.indice]) {
              mascotas = mascotas.filter((_mascota,indice)=> indice != data.indice) ;
              return callback(204,{ mensaje: `mascota con indice ${data.indice} eliminada` });
            }
            return callback(404, { mensaje: `mascota con indice ${data.indice} no encontrado` });
          }
          callback(400, { mensaje: "no se ha enviado el indice" });
        },
      }
}