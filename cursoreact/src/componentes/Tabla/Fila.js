import React from "react";

function Fila({mascota , indice}){
    return(
        <tr>
        <th scope="row">{indice}</th>
        <td>{mascota.tipo}</td>
        <td>{mascota.nombre}</td>
        <td>{mascota.propietario}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" class="btn btn-warning editar"><i class="fa fa-bars"
                    aria-hidden="true"></i></button>
                <button type="button" class="btn btn-danger eliminar"><i class="fa fa-window-close-o"
                    aria-hidden="true"></i></button>

            </div>
        </td>
    </tr>
    )
}

export default Fila;