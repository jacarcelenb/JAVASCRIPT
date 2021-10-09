const listaConsultas = document.getElementById("lista-consultas");
const url = "https://veterianaria-backend.vercel.app";
const listaMascotas = document.getElementById("mascotas");
const listaVeterinarios = document.getElementById("veterinarios");
const btnGuardar = document.getElementById('btn-guardar');
const indice = document.getElementById("indice");
const historia = document.getElementById("historia");
const diagnostico = document.getElementById("diagnostico");
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})


let consultas = [];
let mascotas = [];
let veterinarios = [];
async function listarConsultas() {
    /*
     consultas: [
       { mascota: 0 ,
         veterinario: 0 , 
         fechaCreacion: new Date() , 
         fechaEdicion: new Date(),
         historia: "" , 
         diagnostico: ""}, 
    ]
     */
    try {
        const entidad = "consultas";
        const respuesta = await fetch(`${url}/${entidad}`);
        const consultasServer = await respuesta.json();
        if (Array.isArray(consultasServer)) {
            consultas = consultasServer;
        }
        if (respuesta.ok) {
            const htmlConsultas = consultas.map((consulta, indice) =>
                ` <tr>
            <th scope="row">${indice}</th>
            <td>${consulta.mascota.nombre}</td>
            <td>${consulta.veterinario.nombre} ${consulta.veterinario.apellido}</td>
            <td>${consulta.diagnostico}</td>
            <td>${consulta.fechaCreacion}</td>
            <td>${consulta.fechaEdicion}</td>
           
            <td>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-danger editar">Editar</button>
                    
                </div>
            </td>
            </tr>`).join("");

            listaConsultas.innerHTML = htmlConsultas;
            Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index) =>
                botonEditar.onclick = editar(index))



        }

    } catch (error) {
        throw error;
    }
}


async function listarMascotas() {
    try {
        const entidad = "mascotas";
        const respuesta = await fetch(`${url}/${entidad}`);
        const MascotasServer = await respuesta.json();
        if (Array.isArray(MascotasServer)) {
            mascotas = MascotasServer;
        }
        if (respuesta.ok) {
            const htmlMascotas = mascotas.map((mascota, indice) =>
                ` <option value=${indice}>${mascota.nombre}</option>`).join("");

            listaMascotas.innerHTML += htmlMascotas;

        }

    } catch (error) {
        throw error;
    }
}


async function listarVeterinarios() {
    try {
        const entidad = "veterinarios";
        const respuesta = await fetch(`${url}/${entidad}`);
        const veterinariosServer = await respuesta.json();
        if (Array.isArray(veterinariosServer)) {
            veterinarios = veterinariosServer;
        }
        if (respuesta.ok) {
            const htmlveterinarios = veterinarios.map((veterinario, indice) =>
                ` <option value=${indice}>${veterinario.nombre} ${veterinario.apellido}</option>`).join("");

            listaVeterinarios.innerHTML += htmlveterinarios;

        }

    } catch (error) {
        throw error;
    }
}

async function enviarDatos(evento) {
    evento.preventDefault();
    try {

        const accion = btnGuardar.innerHTML;
        const entidad = "consultas";
        const datos = {
            mascota: listaMascotas.value,
            veterinario: listaVeterinarios.value,
            historia: historia.value,
            diagnostico: diagnostico.value

        };
        let urlEnvio = `${url}/${entidad}`;
        let method = "POST";

        if (accion == 'Editar') {
            urlEnvio += `/${indice.value}`;
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
            listarConsultas();
            resetModal();

        } else {
            resetModal();
        }

    } catch (error) {

    }


}
function editar(id) {

    return function handler() {
        btnGuardar.innerHTML = 'Editar';
        myModal.show();
        const consulta = consultas[id];
        indice.value = id;
        listaMascotas.value = consulta.mascota.id;
        listaVeterinarios.value = consulta.veterinario.id;
        historia.value = consulta.historia;
        diagnostico.value = consulta.diagnostico;

    }

}

function resetModal() {
    listaMascotas.value = "";
    listaVeterinarios.value = "";
    indice.value = "";
    historia.value = "";
    diagnostico.value = "";
    btnGuardar.innerText = 'Crear';
}


function validar(datos) {
    if (typeof datos !== 'object') {
        return false;
    }
    let respuesta = true;
    for (let index in datos) {
        if (datos[index].length === 0) {
            document.getElementById(index).classList.add("is-invalid");
            respuesta = false;
        }else{
            document.getElementById(index).classList.remove("is-invalid");
            document.getElementById(index).classList.add("is-valid");
        }

    }
  return respuesta;
}

btnGuardar.onclick = enviarDatos;
listarConsultas();
listarMascotas();
listarVeterinarios();
