const fs = require("fs")
const path = require("path");

const directorioBase = path.join(__dirname,"data");

const dataHandler = {
crear: ({directorioEntidad,nombreArchvio,datosGuardar}, callback) =>{
fs.open(`${directorioBase}/${directorioEntidad}/${nombreArchvio}.json`,"wx",
(error , fileDescriptor)=>{
    if (!error && fileDescriptor) {
        const datosEnString = JSON.stringify(datosGuardar);
        
        fs.writeFile(fileDescriptor , datosEnString , error2 =>{
            if (error2) {
                return callback(
                    new Error("Error al intentar escribir en el archivo nuevo")
                );
            }
            fs.close(fileDescriptor , (error3)=>{
                if (error3) {
                    return callback(new Error('Error al cerrar archivo'));
                }
                callback(false);
            })

        })
    }else{
        callback(new Error("No se pudo crear el archivo"))
    }
})
},
obtenerUno:({directorioEntidad = "mascotas" , nombreArchivo} , callback)=>{
    fs.readFile(`${directorioBase}/${directorioEntidad}/${nombreArchivo}.json`,'utf-8' ,
    (error , dataArchivo)=>{
        if (error) {
            return callback(new Error("No se pudo leer el archivo o no existe"));
        }
        return callback(false,dataArchivo);
    })
},listar : ({directorioEntidad="mascotas"} ,callback) =>{
    fs.readdir(`${directorioBase}/${directorioEntidad}/` ,(error , (files)=>{
        if (error) {
            return callback(new Error(`No se pudo listar desde  ${directorioBase}`));
        }
        files = files.filter((file)=>file.includes(".json"));
        console.log(files);
    }))
},
};

dataHandler.listar({} , () =>{});
module.exports = dataHandler;