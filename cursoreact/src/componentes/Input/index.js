import React from "react";
import "./Input.css"

function Input ({tipo= "text" 
, nombreCampo 
, onInput = () =>{} 
,placeholder ,
value = "" ,
defaultvalue = value}){
 return(
    <input type={tipo}
    className="form-control"
    name={nombreCampo}
    placeholder={placeholder}
    onInput={onInput}
    value={value}
    defaultValue={value}/>
 )
}

export default Input