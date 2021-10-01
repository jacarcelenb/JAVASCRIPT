module.exports = function consultasHandler({consultas , veterinarios , mascotas}) {
    return {
        get: (data, callback) => {
            if (data.indice) {
                if (consultas[data.indice]) {
                    return callback(200, consultas[data.indice]);
                }
                return callback(404, { mensaje: `consulta con indice ${data.indice} no encontrado` });
            }
            const ConsultasRelacionadas =  consultas.map((consulta) =>(
                {...consulta, mascota:{ ...mascotas[consulta.mascota], id: consulta.mascota},
                veterinario: {...veterinarios[consulta.veterinario] , id: consulta.veterinario}}
            ));
            callback(200, ConsultasRelacionadas);
        },
        post: (data, callback) => {
            let nuevaconsulta = data.payload;
            nuevaconsulta.fechaCreacion = new Date();
            nuevaconsulta.fechaEdicion = null;
            consultas = [...consultas,nuevaconsulta]
            callback(201, data.payload);
        },
        put: (data, callback) => {
            if (data.indice) {
                if (consultas[data.indice]) {
                    const {fechaCreacion} = consultas[data.indice];
                    consultas[data.indice] = {...data.payload , fechaCreacion,
                    fechaEdicion: new Date(),
                };
                    return callback(200, consultas[data.indice]);
                }
                return callback(404, { mensaje: `consulta con indice ${data.indice} no encontrado` });
            }
            callback(400, { mensaje: "no se ha enviado el indice" });
        },
        delete: (data, callback) => {
            if (data.indice) {
                if (consultas[data.indice]) {
                    consultas = consultas.filter((_consulta, indice) => indice != data.indice);
                    return callback(204, { mensaje: `consulta con indice ${data.indice} eliminada` });
                }
                return callback(404, { mensaje: `consulta con indice ${data.indice} no encontrado` });
            }
            callback(400, { mensaje: "no se ha enviado el indice" });
        },
    }
}