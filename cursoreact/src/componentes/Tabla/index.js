import React, { useState } from "react";
import Encabezado from "./Encabezado";

function Tabla() {
    const [mascotas, setMascotas] = useState([
        { tipo: "Perro", nombre: "Trusky0", propietario: "Camilo" },
        { tipo: "Perro", nombre: "Trusky1", propietario: "Camilo" },
        { tipo: "Perro", nombre: "Trusky2", propietario: "Camilo" },
        { tipo: "Perro", nombre: "Trusky3", propietario: "Jorge" }
    ]);
   const columnas = mascotas.length > 0 ? Object.keys(mascotas[0]) : []
    return (
        <table className="table table-hover">
            <Encabezado columnas={columnas}/>
            <tbody id="lista-mascotas">
                {
                    mascotas.map((mascota, indice) => (
                        <tr>
                            <th scope="row">${indice}</th>
                            <td>${mascota.tipo}</td>
                            <td>${mascota.nombre}</td>
                            <td>${mascota.propietario}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" class="btn btn-warning editar"><i class="fa fa-bars"
                                        aria-hidden="true"></i></button>
                                    <button type="button" class="btn btn-danger eliminar"><i class="fa fa-window-close-o"
                                        aria-hidden="true"></i></button>

                                </div>
                            </td>
                        </tr>)) }
            </tbody>
        </table>)
}

export default Tabla;