const listaConsultas = document.getElementById("lista-consultas");
const url = "http://localhost:8000/consultas";

let consultas = [];
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
        const respuesta = await fetch(url);
        const consultasServer = await respuesta.json();
        if (Array.isArray(consultasServer)) {
            consultas = consultasServer;
        }
        if (respuesta.ok) {
            const htmlConsultas = consultas.map((consulta, indice) =>
            ` <tr>
            <th scope="row">${indice}</th>
            <td>${consulta.mascota}</td>
            <td>${consulta.veterinaria}</td>
            <td>${consulta.fechaCreacion}</td>
            <td>${consulta.fechaEdicion}</td>
            <td>${consulta.mascota}</td>
           
            <td>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-warning">Editar</button>
                    
                </div>
            </td>
            </tr>`).join("");
            
            
            listaConsultas.innerHTML = htmlConsultas;
            
        }
       
    } catch (error) {
        throw error;
    }
}

listarConsultas();
