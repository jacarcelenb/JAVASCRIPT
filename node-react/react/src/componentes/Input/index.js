import React from "react";
import "./Input.css"

function Input ({tipo= "text" 
, nombreCampo 
, onInput = () =>{} 
,placeholder ,
value = "" ,
}){
 return(
    <input type={tipo}
    className="form-control"
    name={nombreCampo}
    placeholder={placeholder}
    onInput={onInput}
    defaultValue={value}/>
 )
}

export default Input