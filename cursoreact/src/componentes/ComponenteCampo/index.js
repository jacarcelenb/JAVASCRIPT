import React ,{useState, useEffect}from "react";
import Input from "../Input";
import Select from "../Select";
import { useEffect, useState } from "react";
import { ListarEntidad } from "../../servicio";
const opcionesIniciales = {
    tipo: [
        { valor: "Perro", etiqueta: "Perro" }
        ,{ valor: "Gato", etiqueta: "Gato" },
        { valor: "Pajaro", etiqueta: "Pajaro" },
        { valor: "Otro", etiqueta: "Otro" }
    ],
    diagnostico:[
        { valor: "Sarna", etiqueta: "Sarna" },
        { valor: "Moquillo", etiqueta: "Moquillo" },
        { valor: "Trauma cefalico", etiqueta: "Trauma cefalico" },
        { valor: "Parvovirosis", etiqueta: "Parvovirosis" },
    ]

}
function ComponentCampo({
    manejarInput = () => { },
    objeto = {},
    nombreCampo = "" }) {
    const [options,setOptions] = useState(opcionesIniciales);
    useEffect(()=>{
        const obtenerOptionsBackend = async () =>{
            const mascotasPromise = ListarEntidad({entidad:"mascotas"});
            const veterinariosPromise = ListarEntidad({entidad:"veterinarios"});
            const duenosPromise = ListarEntidad({entidad:"propietarios"});
            let [mascota , veterinario,propietario] = await Promise.all([
                mascotasPromise,
                veterinariosPromise,
                duenosPromise,
            ]);
            mascota = mascota.map((_mascota,index) =>({
                valor:index,
                etiqueta: `${_mascota.nombre} (${_mascota.tipo})`,
            }));
            veterinario= veterinario.map((_veterinario,index) =>({
                valor:index,
                etiqueta: `${_veterinario.nombre} (${_veterinario.apellido})`,
            }));
            propietario= propietario.map((_propietario,index) =>({
                valor:index,
                etiqueta: `${_propietario.nombre} (${_propietario.apellido})`,
            }));
            const nuevasOpciones ={...options,mascota, veterinario, propietario};
            setOptions(nuevasOpciones);
        };
        obtenerOptionsBackend();
    },[]);
    switch (nombreCampo) {
        case 'tipo':
        case 'mascota':
        case 'veterinaria':
        case 'diagnostico':
        case 'propietario':
            return (<Select
                options={options[nombreCampo]}
                onChange={manejarInput}
                placeholder={nombreCampo}
                value={objeto[nombreCampo]}
            />)

        case 'nombre':
        case 'propietario':
        case 'apellido':
        case 'documento':
        case 'historia':
            return (
                <Input
                    nombreCampo={nombreCampo}
                    tipo="text"
                    onInput={manejarInput}
                    placeholder={nombreCampo}
                    value={objeto[nombreCampo]}
                />
            );
        default:
            return false;
    }

};

export default ComponentCampo;