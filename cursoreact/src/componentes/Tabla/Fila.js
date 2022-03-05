import React from "react";
import BotonAccion from "../BotonAction";

function Fila({entidad, indice} , editarEntidad =() =>{} ,
index ,
eliminarEntidad =() =>{}){
    return(
        <tr>
        <th scope="row">{indice}</th>
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