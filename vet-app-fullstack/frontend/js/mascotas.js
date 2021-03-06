const listaMascotas = document.getElementById("lista-mascotas");
const nombre = document.getElementById("nombre");
const propietario = document.getElementById("propietario");
const tipoanimal = document.getElementById("tipoanimal");
const form = document.getElementById("form");
const btnGuardar = document.getElementById('btn-guardar');
const btnCerrar = document.getElementById('btn-closemodal');
const btnCancelar = document.getElementById('btn-cancelar');
const indiceEditar = document.getElementById('indice');
const url = "https://veterianaria-backend.vercel.app/mascotas";
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})

var toastLiveExample = document.getElementById('liveToast')

var toast = new bootstrap.Toast(toastLiveExample)

let mascotas = [
    {
        tipo: "Gato",
        nombre: "Manchas",
        propietario: "Esteban"
    }
]

async function listarMascotas() {

    try {
        const respuesta = await fetch(url);
        const mascotasServidor = await respuesta.json();
        if (Array.isArray(mascotasServidor)) {
            mascotas = mascotasServidor;
        }

        if (mascotas.length) {
            let htmlMascotas = mascotas.map((mascota, indice) => `
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
</tr>`).join("");
            listaMascotas.innerHTML = htmlMascotas;
            Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index) =>
                botonEditar.onclick = editar(index))
            Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index) =>
                botonEliminar.onclick = eliminar(index))

            return;
        }


        listaMascotas.innerHTML = `  <tr>
    <td colspan="5">No hay mascotas</td>
    </tr>`;
    } catch (error) {
        toast.show()
          
    }


    // la funcion map recorre el arreglo y ejecuta el callback
    // funcion join para evitar que los elementos hmtl se junten

}

async function enviarDatos(evento) {
    evento.preventDefault();

    try {
        const accion = btnGuardar.innerHTML;
        const datos = {
            tipo: tipoanimal.value,
            nombre: nombre.value,
            propietario: propietario.value

        };
        let method = "POST";
        let urlEnvio = url;


        if (accion === 'Editar') {
            // editar 
            method = "PUT";
            mascotas[indiceEditar.value] = datos;
            urlEnvio = `${url}/${indiceEditar.value}`
        }

        const respuesta = await fetch(urlEnvio, {
            method, // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        })


        if (respuesta.ok) {
            listarMascotas();
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
        const mascota = mascotas[id];
        nombre.value = mascota.nombre;
        propietario.value = mascota.propietario;
        tipoanimal.value = mascota.tipo;
        indiceEditar.value = id;
    }

}

function eliminar(indice) {
    const urlEnvio = `${url}/${indice}`;
    return async function clickEliminar() {
        try {
            const respuesta = await fetch(urlEnvio, {
                method: "DELETE",

            })
            if (respuesta.ok) {
                listarMascotas();
                resetModal();

            } else {
                resetModal();
            }
        } catch (error) {
            toast.show()
        }

    }

}

function CrearMensaje(message, type) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  
    alertMessage.append(wrapper)
  }

function resetModal() {
    nombre.value = "";
    propietario.value = "";
    tipoanimal.value = "";
    indiceEditar.value = "";
    btnGuardar.innerText = 'Crear';
    console.log("fkadlfkadf");
}
listarMascotas();
function solicitarMascotas() {

}
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
btnCancelar.onclick = resetModal;
btnCerrar.onclick = resetModal;