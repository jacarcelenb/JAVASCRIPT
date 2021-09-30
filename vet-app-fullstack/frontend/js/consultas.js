const listaConsultas = document.getElementById("lista-consultas");
const url = "http://localhost:8000";
const listaMascotas = document.getElementById("mascotas");
const listaVeterinarios = document.getElementById("veterinarios");

let consultas = [];
let mascotas = [];
let veterinarios = [];
async function listarConsultas (){
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
                    <button type="button" class="btn btn-danger">Editar</button>
                    
                </div>
            </td>
            </tr>`).join("");
            
            
            listaConsultas.innerHTML = htmlConsultas;
            
        }
       
    } catch (error) {
        throw error;
    }
}


async function listarMascotas (){
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


async function listarVeterinarios (){
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

function editar(id) {

    return function handler() {
        btnGuardar.innerHTML = 'Editar';
        myModal.show();
        const dueno = duenos[id];
        documento.value = dueno.documento;
        nombre.value = dueno.nombre;
        apellido.value = dueno.apellido;
        indiceEditar.value = id;
    }

}
listarConsultas();
listarMascotas();
listarVeterinarios();
