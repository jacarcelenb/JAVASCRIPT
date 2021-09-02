// Asynchronous Javascript And Xml
const listaUsuarios = document.getElementById("lista");
const boton = document.getElementById("boton");

function refrescar(){
    
}

function reqListener(){
   const users= JSON.parse(this.responseText);
   const usuariosRender = users.map(user =>
         `<li>${user.nombre}</li>`
).join("");
   listaUsuarios.innerHTML = usuariosRender;
}
var oReq = new XMLHttpRequest();
oReq.addEventListener("load",reqListener);
oReq.open("GET","http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
oReq.send();

function enviarDatos(){
    oReq.open("POST","http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios",true);
    oReq.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    oReq.send("nombre=user98");
}

boton.onclick = enviarDatos();

