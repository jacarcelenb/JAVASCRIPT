
const listaMascotas = document.getElementById("lista-mascotas");
console.log("Mascotas");

let mascotas = [
    {
        tipo: "Gato",
        nombre: "Manchas",
        propietario: "Esteban"
    }
]

function listarMascotas() {
    // la funcion map recorre el arreglo y ejecuta el callback
    // funcion join para evitar que los elementos hmtl se junten
    let htmlMascotas = mascotas.map((mascota , indice) => `
    <tr>
    <th scope="row">${indice}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.propietario}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-warning"><i class="fa fa-bars"
                    aria-hidden="true"></i></button>
            <button type="button" class="btn btn-danger"><i class="fa fa-window-close-o"
                    aria-hidden="true"></i></button>

        </div>
    </td>
</tr>`).join("");
}

listarMascotas();