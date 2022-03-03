import React from "react";
import ModalHeader from "./ModalHeader";
import Select from "../Select";
import "./Modal.css"
import Input from "../Input";
import { ModalFooter } from "./ModalFooter";

const tiposMascota = [{
    valor: "Tipo animal",
    etiqueta: "Tipo animal"
},
{ valor: "Perro", etiqueta: "Perro" }
    , { valor: "Gato", etiqueta: "Gato" },
{ valor: "Pajaro", etiqueta: "Pajaro" },
{ valor: "Otro", etiqueta: "Otro" }]

const duenos = [
    { valor: "Esteban", etiqueta: "Esteban" }
    , { valor: "Gabriela", etiqueta: "Gabriela" },
    { valor: "Pamela", etiqueta: "Pamela" },
    { valor: "Otto", etiqueta: "Otto" }]

function Modal({ cambiarModal = () => { }, manejarInput = () => { }
    , crearEntidad = () => { } }) {

    return (
        <>
            <div className="modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <ModalHeader cambiarModal={cambiarModal} />
                        <div className="modal-body">
                            <form id="form">
                                <div className="form-row">
                                    <div className="col">
                                        <Select nombreCampo="tipo"
                                            options={tiposMascota}
                                            placeholder="Tipo Animal"
                                            onChange={manejarInput} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-2">
                                        <Input tipo="text"
                                            nombreCampo="nombre"
                                            onInput={manejarInput}
                                            placeholder="Nombre" />
                                    </div>

                                    <div className="col-md-2">
                                        <Select options={duenos}
                                            nombreCampo="propietario"
                                            onChange={manejarInput}
                                            placeholder="Dueño" />
                                    </div>
                                </div>


                            </form>

                        </div>
                        <ModalFooter cambiarModal={cambiarModal}
                            crearEntidad={crearEntidad} />
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>);
}

export default Modal;






