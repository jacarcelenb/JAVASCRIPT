import React, { useState } from "react";
import Encabezado from "./Encabezado";
import Fila from "./Fila";
import "../Tabla/Tabla.css";
import "../Tabla/Encabezado.css";

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
            <Encabezado columnas={columnas} />
            <tbody id="lista-mascotas">
                { mascotas.map((mascota, indice) => (
                        <Fila mascota={mascota} indice={indice} />
                    ))}
            </tbody>
        </table>)
}

export default Tabla;