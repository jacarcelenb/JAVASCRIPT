import React from "react";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt,faEdit} from "@fortawesome/free-solid-svg-icons";
import "../BotonAction/BotonAction.css"

function BotonAccion({tipo , index = "",onClick = () =>{}}){
return(
     <button type="button" className={classNames("btn",{"btn-info": tipo === "editar" , "btn-danger"
     : tipo === "eliminar" })}
     onClick={(e) => onClick(e,index)}
     >
       
       {tipo === "editar" && <FontAwesomeIcon icon={faEdit}/> }
       {tipo === "eliminar" && <FontAwesomeIcon icon={faTrashAlt}/> }

     </button>
);
  
}

export default BotonAccion;