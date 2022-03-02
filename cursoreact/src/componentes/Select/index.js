import React from "react";
import "./Select.css"

function Select ({options = [] , nombreCampo = "vacio" , onChange = () =>{}}){
return (
    <select className="form-control" onChange={onChange}>
    <option value="">Seleccione {nombreCampo}</option>
    {options.map(({valor,etiqueta}, index)=>(
     <option key={`${nombreCampo}-${index}-${valor}-${etiqueta}`} value={valor}>{etiqueta}</option>
    ))}
</select>
)

}

export default Select;