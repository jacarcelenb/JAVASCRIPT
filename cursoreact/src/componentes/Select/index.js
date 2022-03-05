import React from "react";
import "./Select.css"

function Select ({options = [] , nombreCampo = "vacio" , onChange = () =>{} , 
placeholder,
value = "",
defaultvalue}){
return (
    <select className="form-control" onChange={onChange} 
    name={nombreCampo} placeholder={placeholder}
    defaultValue={value}> 
    <option value="">Seleccione {placeholder}</option>
    {options.map(({valor,etiqueta}, index)=>(
     <option key={`${nombreCampo}-${index}-${valor}-${etiqueta}`} value={valor}>{etiqueta}</option>
    ))}
</select>
)

}

export default Select;