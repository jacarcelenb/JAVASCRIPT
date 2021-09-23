const listaVeterinarios = document.getElementById("lista-veterinarios");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const pais = document.getElementById("pais");
const identificacion = document.getElementById("identificacion");
const form = document.getElementById("form");
const btnGuardar = document.getElementById('btn-guardar');
const btnCerrar = document.getElementById('btn-closemodal');
const btnCancelar = document.getElementById('btn-cancelar');
const indiceEditar = document.getElementById('indice');
const url = "http://localhost:8000/veterinarios";
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})

let veterinarios = []

async function listarVeterinarios() {
    try {
        const respuesta = await fetch(url);
        const VeterinariosServidor = await respuesta.json();
        if (Array.isArray(VeterinariosServidor)) {
            veterinarios = VeterinariosServidor;
        }
        if (veterinarios.length > 0) {
            let htmlVeterinarios = veterinarios.map((veterinario, indice) => `
    <tr>
    <th scope="row">${indice}</th>
    <td>${veterinario.documento}</td>
    <td>${veterinario.nombre}</td>
    <td>${veterinario.apellido}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-warning editar"><i class="fa fa-bars"
                    aria-hidden="true"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="fa fa-window-close-o"
                    aria-hidden="true"></i></button>

        </div>
    </td>
</tr>`).join("");
            listaVeterinarios.innerHTML = htmlVeterinarios;
            Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index) =>
                botonEditar.onclick = editar(index))
            Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index) =>
                botonEliminar.onclick = eliminar(index))

            return;
        }
        listaVeterinarios.innerHTML = `  <tr>
    <td colspan="5">No hay veterinarios</td>
    </tr>`;
    } catch (error) {
        throw error;
    }
}


function enviarDatos(evento) {
    evento.preventDefault();

    const accion = btnGuardar.innerHTML;
    const datos = {
        identificacion: identificacion.value,
        nombre: nombre.value,
        apellido: apellido.value,
        pais: pais.value

    };

    switch (accion) {
        case 'Editar':
            // editar 
            veterinarios[indiceEditar.value] = datos;
            console.log("entro en switch")
            resetModal();
            break;

        default:
            // crear
            veterinarios.push(datos);
            break;
    }
    listarVeterinarios();
    resetModal();


}
// patron closure
function editar(id) {

    return function handler() {
        btnGuardar.innerHTML = 'Editar';
        myModal.show();
        const veterinario = veterinarios[id];
        identificacion.value = veterinario.identificacion;
        nombre.value = veterinario.nombre;
        apellido.value = veterinario.apellido;
        pais.value = veterinario.pais;
        indiceEditar.value = id;
    }

}

function eliminar(indice) {
    return function clickEliminar() {
        veterinarios = veterinarios.filter((veterinario, indiceveterinario) => indiceveterinario !== indice);
        listarVeterinarios();
    }

}

function resetModal() {
    identificacion.value = "";
    nombre.value = "";
    apellido.value = "";
    pais.value = "";
    indiceEditar.value = "";
    btnGuardar.innerText = 'Crear';
}

listarVeterinarios();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
btnCancelar.onclick = resetModal;
btnCerrar.onclick = resetModal;