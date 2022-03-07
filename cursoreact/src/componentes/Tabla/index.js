import React from "react";
import Encabezado from "./Encabezado";
import Fila from "./Fila";
import "../Tabla/Tabla.css";
import "../Tabla/Encabezado.css";

function Tabla({entidades = [] , editarEntidad = () =>{} ,eliminarEntidad = () =>{}}) {
  
    const columnas = entidades.length > 0 ? Object.keys(entidades[0]) : []
    return (
        <table className="table table-hover">
            <Encabezado columnas={columnas} />
            <tbody id="lista-mascotas">
                { entidades.map((entidad, indice) => (
                        <Fila key={indice} entidad={entidad} indice={indice} 
                        editarEntidad = {editarEntidad}
                        eliminarEntidad = {eliminarEntidad}
                        columnas = {columnas}/>
                    ))}
            </tbody>
        </table>)
}

export default Tabla;