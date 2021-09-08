const listaDuenos = document.getElementById("lista-duenos");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const pais = document.getElementById("pais");
const identificacion = document.getElementById("identificacion");
const form = document.getElementById("form");
const btnGuardar = document.getElementById('btn-guardar');
const btnCerrar = document.getElementById('btn-closemodal');
const btnCancelar = document.getElementById('btn-cancelar');
const indiceEditar = document.getElementById('indice');
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})

let duenos = [
    {
        nombre: "James",
        apellido: "Carter",
        identificacion: "100454448-7",
        pais: "Japon"
    }
]

function listarDuenos() {
    // la funcion map recorre el arreglo y ejecuta el callback
    // funcion join para evitar que los elementos hmtl se junten
    let htmlDuenos = duenos.map((dueno, indice) => `
    <tr>
    <th scope="row">${indice}</th>
    <td>${dueno.identificacion}</td>
    <td>${dueno.nombre}</td>
    <td>${dueno.apellido}</td>
    <td>${dueno.pais}</td>
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
            duenos[indiceEditar.value] = datos;
            console.log("entro en switch")
            resetModal();
            break;

        default:
            // crear
            duenos.push(datos);
            break;
    }
    listarDuenos();
    resetModal();


}
// patron closure
function editar(id) {

    return function handler() {
        btnGuardar.innerHTML = 'Editar';
        myModal.show();
        const dueno = duenos[id];
        identificacion.value = dueno.identificacion;
        nombre.value = dueno.nombre;
        apellido.value = dueno.apellido;
        pais.value = dueno.pais;
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
    identificacion.value = "";
    nombre.value = "";
    apellido.value = "";
    pais.value = "";
    indiceEditar.value = "";
    btnGuardar.innerText = 'Crear';
}

listarDuenos();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
btnCancelar.onclick = resetModal;
btnCerrar.onclick = resetModal;