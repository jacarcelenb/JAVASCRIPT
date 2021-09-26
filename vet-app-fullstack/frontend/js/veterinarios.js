const listaVeterinarios = document.getElementById("lista-veterinarios");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const pais = document.getElementById("pais");
const documento = document.getElementById("documento");
const form = document.getElementById("form");
const btnGuardar = document.getElementById('btn-guardar');
const btnCerrar = document.getElementById('btn-closemodal');
const btnCancelar = document.getElementById('btn-cancelar');
const indiceEditar = document.getElementById('indice');
const url = "http://localhost:8000/veterinarios";
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})

var toastLiveExample = document.getElementById('liveToast')

var toast = new bootstrap.Toast(toastLiveExample)

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
        toast.show()
    }
}


async function enviarDatos(evento) {
    evento.preventDefault();

    try {
        const accion = btnGuardar.innerHTML;
        let urlEnvio = url;
        let method = "POST";
        const datos = {
            documento: documento.value,
            nombre: nombre.value,
            apellido: apellido.value,

        };

        if (accion === 'Editar') {
            urlEnvio += `/${indiceEditar.value}`;
            method = "PUT";

        }

        const respuesta = await fetch(urlEnvio, {
            method, // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        })


        if (respuesta.ok) {
            listarVeterinarios();
            resetModal();

        } else {
            resetModal();
        }

    } catch (error) {
        toast.show()
    }


}
// patron closure
function editar(id) {

    return function handler() {
        btnGuardar.innerHTML = 'Editar';
        myModal.show();
        const veterinario = veterinarios[id];
        documento.value = veterinario.documento;
        nombre.value = veterinario.nombre;
        apellido.value = veterinario.apellido;
        indiceEditar.value = id;
    }

}

function eliminar(indice) {
    const urlEnvio = `${url}/${indice}`;
    let method = "DELETE";
    return  async function clickEliminar() {
       
        try {
            const respuesta = await fetch(urlEnvio, {
                method, 
            })
            if (respuesta.ok) {
                listarVeterinarios();
            } 
        } catch (error) {
            console.log({error})
            toast.show()
        }
    }

}

function resetModal() {
    documento.value = "";
    nombre.value = "";
    apellido.value = "";
    indiceEditar.value = "";
    btnGuardar.innerText = 'Crear';
}

listarVeterinarios();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
btnCancelar.onclick = resetModal;
btnCerrar.onclick = resetModal;