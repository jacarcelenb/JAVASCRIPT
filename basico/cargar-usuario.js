let cliente = {};
const listaUsuarios = document.getElementById('listado-cliente')

function tomarIndiceUsuario(){
    return location.search.replace('?','').split('=')[1];

}
function obtenerUsuario() {
    fetch(`https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios/${tomarIndiceUsuario()}`)
       .then(response => response.json()).then(respuestaUser => {
          console.log('clientes:', respuestaUser)
          cliente = respuestaUser
          render();
       })
       .catch(error => {
          console.error('Error:', error)
       })
 }
 

 function render() {
    const usuariosRender = 
       `<tr>
       <td>${cliente.nombre ? cliente.nombre : 'vacio'}</td>
       <td>${cliente.apellido ? cliente.apellido : 'vacio'}</td>
       <td>${cliente.pais ? cliente.pais : 'vacio'}</td>
      
       </tr>`
    
    listaUsuarios.innerHTML = usuariosRender;
  
 }
 obtenerUsuario();