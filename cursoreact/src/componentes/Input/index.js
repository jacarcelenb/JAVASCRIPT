import React from "react";
import "./Input.css"

function Input ({tipo= "text" , nombreCampo , onInput = () =>{}}){
 return(
    <input type={tipo}
    className="form-control"
    id={nombreCampo}
    placeholder={nombreCampo}
    onInput={onInput}/>
 )
}

export default Input