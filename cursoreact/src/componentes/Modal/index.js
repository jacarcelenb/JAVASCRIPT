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
    { valor: "Esteban", etiqueta: "Esteba" }
    , { valor: "Gabriela", etiqueta: "Gabriela" },
    { valor: "Pamela", etiqueta: "Pamela" },
    { valor: "Otto", etiqueta: "Otto" }]

function Modal() {

    return (
        <>
            <div className="modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <ModalHeader />
                        <div className="modal-body">
                            <form id="form">
                                <div className="form-row">
                                    <div className="col">
                                        <Select options={tiposMascota} nombreCampo="tipo de mascota" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-2">
                                        <Input tipo="text" nombreCampo="nombre" />
                                    </div>

                                    <div className="col-md-2">
                                        <Select options={duenos} nombreCampo="dueño" />
                                    </div>
                                </div>


                            </form>

                        </div>
                        <ModalFooter />
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>);
}

export default Modal;






