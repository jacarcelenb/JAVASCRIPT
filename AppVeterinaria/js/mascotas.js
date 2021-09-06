
const listaMascotas = document.getElementById("lista-mascotas");
const nombre = document.getElementById("nombre");
const propietario = document.getElementById("propietario");
const tipoanimal = document.getElementById("tipoanimal");
const form = document.getElementById("form");
const btnGuardar = document.getElementById('btn-guardar');
const indiceEditar = document.getElementById('indice');

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
    let htmlMascotas = mascotas.map((mascota, indice) => `
    <tr>
    <th scope="row">${indice}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.propietario}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-warning editar" data-bs-toggle="modal"
            data-bs-target="#exampleModal"><i class="fa fa-bars"
                    aria-hidden="true"></i></button>
            <button type="button" class="btn btn-danger"><i class="fa fa-window-close-o"
                    aria-hidden="true"></i></button>

        </div>
    </td>
</tr>`).join("");
    listaMascotas.innerHTML = htmlMascotas;
    Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index) =>
        botonEditar.onclick = editar(index))
}

function enviarDatos(evento) {
    evento.preventDefault();
    const datos = {
        tipo: tipoanimal.value,
        nombre: nombre.value,
        propietario: propietario.value

    };
    const accion = btnGuardar.innerHTML;
    switch (accion) {
        case 'Editar':
            // editar 
            mascotas[indiceEditar.value] = datos;
            break;

        default:
            // crear
            mascotas.push(datos);
            break;
    }



    listarMascotas();
    resetModal();

}
// patron closure
function editar(id) {
    btnGuardar.innerText = 'Editar';
    return function handler() {
        const mascota = mascotas[id];
        nombre.value = mascota.nombre;
        propietario.value = mascota.propietario;
        tipoanimal.value = mascota.tipo;
        indiceEditar.value = id;
    }
}

function resetModal() {
    nombre.value = "";
    propietario.value ="";
    tipoanimal.value ="";
    indiceEditar.value = "";
    btnGuardar.innerText = 'Crear';
    console.log("fkadlfkadf");
}
listarMascotas();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;