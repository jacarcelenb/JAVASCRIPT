import React from "react";
import "./Input.css"

function Input ({tipo= "text" , nombreCampo}){
 return(
    <input type={tipo}
    className="form-control"
    id={nombreCampo}
    placeholder={nombreCampo}/>
 )
}

export default Input