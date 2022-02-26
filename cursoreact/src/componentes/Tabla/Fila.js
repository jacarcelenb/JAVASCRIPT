import React from "react";
import BotonAccion from "../BotonAction";

function Fila({mascota , indice}){
    return(
        <tr>
        <th scope="row">{indice}</th>
        <td>{mascota.tipo}</td>
        <td>{mascota.nombre}</td>
        <td>{mascota.propietario}</td>
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