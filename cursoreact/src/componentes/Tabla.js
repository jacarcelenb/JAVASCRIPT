import React from "react"

function Tabla() {
    return (
        <table className="table table-hover">
            <thead className="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Propietario</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody id="lista-mascotas">

            </tbody>
        </table>)
}

export default Tabla;