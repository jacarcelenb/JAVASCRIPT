console.log("ejemplo-fetch")
const listaUsuarios = document.getElementById("listado-clientes");
const boton = document.getElementById("boton");
const limpiar = document.getElementById("limpiar");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const pais = document.getElementById("pais");
const indice = document.getElementById("indice");
let clientes = [];
let botonesEliminar = null;
let botonesEditar = null;


// mostrar datos en los componentes html
function render() {
   const usuariosRender = clientes.map((cliente, indice) =>
      `<tr>
      <td>${cliente.nombre ? cliente.nombre : 'vacio'}</td>
      <td>${cliente.apellido ? cliente.apellido : 'vacio'}</td>
      <td>${cliente.pais ? cliente.pais : 'vacio'}</td>
      <td><a href="index2.html?cliente=${indice}">Ver</a></td>
      <td><button class="editar" data-indice=${indice}>Editar</button></td>
      <td><button class="eliminar" data-indice=${indice}>Eliminar</button></td>
      </tr>`
   ).join("");
   listaUsuarios.innerHTML = usuariosRender;
   botonesEliminar = document.getElementsByClassName('eliminar');
   botonesEditar = document.getElementsByClassName('editar');
   Array.from(botonesEliminar).forEach(botonEliminar => {
      botonEliminar.onclick = EliminarUnUsuario;
   });

   Array.from(botonesEditar).forEach(botonEditar => {
      botonEditar.onclick = EditarUnUsuario;
   });
}

// realizar la peticion POST la url debe tener https
function enviarDatos(e) {
   // evitar que se redireccione la pagina
   e.preventDefault();
   let accion = e.target.innerText;
   const datos = {
      nombre: nombre.value
      , apellido: apellido.value
      , pais: pais.value
   };

   let url = null;
   let method = null;

   if (accion === 'Crear') {
      url ='https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios';
      method = 'POST';
   } else if(accion == 'Editar'){
      if (indice.value) {
         url =`https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios/${indice.value}`;
         method = 'PUT';
      } else {
         return;
      }
   }else{
      return;
   }

   fetch(url, {
      method , // or 'PUT'
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
   })
      .then(response => response.json())
      .then(resultado => {
         console.log('Success:', resultado);
         refrescar();
      })
      .catch((error) => {
         console.error('Error:', error);
      });


}


function EliminarUnUsuario(e) {
   //  redireccione la pagina
   e.preventDefault();
   console.log('eliminarUnUsuario')
   fetch(`https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios/${e.target.dataset.indice}`, {
      method: 'DELETE', // or 'PUT'

   })
      .then(response => response.json())
      .then(resultado => {
         console.log('Success:', resultado);
         refrescar();
      })
      .catch((error) => {
         console.error('Error:', error);
      });


}


function EditarUnUsuario(e) {
   //  redireccione la pagina
   e.preventDefault();
   console.log('editarUnUsuario');
   if(e.target.dataset.indice){
      const usuario = clientes[e.target.dataset.indice];
      nombre.value = usuario.nombre ? usuario.nombre : '';
      apellido.value = usuario.apellido ? usuario.apellido : '';
      pais.value = usuario.pais ? usuario.pais : '(';
      indice.value = e.target.dataset.indice;
      boton.innerText = 'Editar';
   }else{
      boton.innerText = 'Crear';
   }
   
}

function refrescar() {
   fetch('https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios')
      .then(response => response.json()).then(respuestaUser => {
         console.log('clientes:', respuestaUser)
         clientes = respuestaUser
         render();
         restaurarTextoBoton();
      })
      .catch(error => {
         console.error('Error:', error)
        restaurarTextoBoton();
      })
}

function restaurarTextoBoton(){
   boton.innerText = 'Crear';
   indice.value='';
   nombre.value = '';
   apellido.value = '';
   pais.value = '';

}

// para que se muestra el listado de usuarios en la tabla al cargar la pagina
refrescar();
// componente para enviar los datos hacia a la API-REST
boton.onclick = enviarDatos;
limpiar.onclick = restaurarTextoBoton;

