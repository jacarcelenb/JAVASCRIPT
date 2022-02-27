import React from "react";
import BotonAccion from "../BotonAction";

function Fila({entidad, indice}){
    return(
        <tr>
        <th scope="row">{indice}</th>
        <td>{entidad.tipo}</td>
        <td>{entidad.nombre}</td>
        <td>{entidad.propietario}</td>
        <td>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                
              <BotonAccion tipo="editar"/>
              <BotonAccion tipo="eliminar"/>
            </div>
        </td>
    </tr>
    )
}

export default Fila;