const listaDuenos = document.getElementById("lista-duenos");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const documento = document.getElementById("documento");
const form = document.getElementById("form");
const btnGuardar = document.getElementById('btn-guardar');
const btnCerrar = document.getElementById('btn-closemodal');
const btnCancelar = document.getElementById('btn-cancelar');
const indiceEditar = document.getElementById('indice');
const url = "http://localhost:8000/propietarios";
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})

var toastLiveExample = document.getElementById('liveToast')

var toast = new bootstrap.Toast(toastLiveExample)

let duenos = []

async function listarDuenos() {
    try {
        // la funcion map recorre el arreglo y ejecuta el callback
        // funcion join para evitar que los elementos hmtl se junten
        const respuesta = await fetch(url);
        const DuenosServidor = await respuesta.json();

        if (Array.isArray(DuenosServidor)) {
            duenos = DuenosServidor;
        }

        if (duenos.length > 0) {
            let htmlDuenos = duenos.map((dueno, indice) => `
    <tr>
    <th scope="row">${indice}</th>
    <td>${dueno.documento}</td>
    <td>${dueno.nombre}</td>
    <td>${dueno.apellido}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-warning editar"><i class="fa fa-bars"
                    aria-hidden="true"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="fa fa-window-close-o"
                    aria-hidden="true"></i></button>

        </div>
    </td>
</tr>`).join("");
            listaDuenos.innerHTML = htmlDuenos;
            Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index) =>
                botonEditar.onclick = editar(index))
            Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index) =>
                botonEliminar.onclick = eliminar(index))

            return;
        }
        listaDuenos.innerHTML = `  <tr>
    <td colspan="5">No hay dueños</td>
    </tr>`;
    } catch (error) {
        toast.show()
    }

}

 async function enviarDatos(evento) {
    evento.preventDefault();
    try {
        
        const accion = btnGuardar.innerHTML;
        const datos = {
            documento: documento.value,
            nombre: nombre.value,
            apellido: apellido.value,
    
        };
        let urlEnvio = url;
        let method= "POST";
    
        if (accion == 'Editar') {
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
            listarDuenos();
            resetModal();

        } else {
            resetModal();
        }
    
    } catch (error) {
        
    }
 
  
}
// patron closure
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

function eliminar(indice) {
    return function clickEliminar() {
        duenos = duenos.filter((dueno, indicedueno) => indicedueno !== indice);
        listarDuenos();
    }

}

function resetModal() {
    documento.value = "";
    nombre.value = "";
    apellido.value = "";
    indiceEditar.value = "";
    btnGuardar.innerText = 'Crear';
}

listarDuenos();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
btnCancelar.onclick = resetModal;
btnCerrar.onclick = resetModal;