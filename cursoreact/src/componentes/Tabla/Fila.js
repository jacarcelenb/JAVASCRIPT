import React from "react";
import BotonAccion from "../BotonAction";

const evaluarCampo = ({entidad ,columna}) =>{
    if (columna === 'veterinaria') {
        return `${entidad[columna].nombre} ${entidad[columna].apellido}`;
    }
    if (columna === 'mascota') {
        return `${entidad[columna].nombre} (${entidad[columna].apellido})`;
    }
    
    return entidad[columna]
}
function Fila({entidad, indice} , editarEntidad =() =>{} ,
index ,
eliminarEntidad =() =>{} ,
columnas = []){
    return(
        <tr>
        <th scope="row">{indice}</th>
        {columnas.map((columna , _index)=>(
            <td key={`col-${columna}-${_index}`}>{evaluarCampo({entidad , columnas})}</td>
        ))}
        <td>{entidad.tipo}</td>
        <td>{entidad.nombre}</td>
        <td>{entidad.propietario}</td>
        <td>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                
              <BotonAccion tipo="editar" onClick= {editarEntidad} index ={index}/>
              <BotonAccion tipo="eliminar" onClick={(e) => eliminarEntidad(e, index)}/>
            </div>
        </td>
    </tr>
    )
}

export default Fila;