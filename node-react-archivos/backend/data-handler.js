const fs = require("fs")
const path = require("path");
const util = require("util");
const directorioBase = path.join(__dirname,"data");

const readFilePromesa = util.promisify(fs.readFile);
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
obtenerUno: async (
    {directorioEntidad= "mascotas",nombreArchvio , agregarExtension= true},
) =>{
  
    try {
        let archivo = null;
        if (agregarExtension) {
            archivo= `${directorioBase}/${directorioEntidad}/${nombreArchvio}.json`;
        }else{
            archivo= `${directorioBase}/${directorioEntidad}/${nombreArchvio}`;
        }
        const resultado = await  fs.promises.readFile(
           archivo, {encoding:"utf-8"}
        );
        return resultado;
    } catch (error) {
        return new Error(`No se pudo listar desde  ${directorioBase}`);
    }
},listar : async  ({directorioEntidad="mascotas"}) =>{
    try {
        let archivos = await fs.promises.readdir(`${directorioBase}/${directorioEntidad}/`);
        archivos = archivos.filter((file)=>file.includes(".json"));
        const arrayPromesasLeerArchivo = archivos.map((archivo)=>{
            return dataHandler.obtenerUno({directorioEntidad ,nombreArchvio: archivo , agregarExtension: false})
        });
        
        let datosArchivos = await Promise.all(arrayPromesasLeerArchivo);
        datosArchivos = datosArchivos.map(JSON.parse);
        return datosArchivos;

    } catch (error) {
        return new Error(`No se pudo listar desde  ${directorioBase}`);
    }
  
    
}
}


dataHandler.listar({} , () =>{});
module.exports = dataHandler;