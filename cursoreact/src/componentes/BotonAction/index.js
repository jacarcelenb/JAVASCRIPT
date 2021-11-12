import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt,faEdit} from "@fortawesome/free-solid-svg-icons":

function BotonAccion({tipo}){
return(
     <button type="button" class="btn btn-danger eliminar">
       {tipo === "editar" && <FontAwesomeIcon icon={faEdit}/> }
       {tipo === "eliminar" && <FontAwesomeIcon icon={faTrashAlt}/> }

     </button>
);
  
}

export default BotonAccion;