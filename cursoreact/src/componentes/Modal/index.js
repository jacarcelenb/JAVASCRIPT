import React from "react";
import ModalHeader from "./ModalHeader";
import Select from "../Select";
import "./Modal.css"


function Modal() {

    return (
        <>
            <div className="modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <ModalHeader />
                        <div className="modal-body">
                            <form id="form">
                                <Select />
                                <div className="form-row">
                                    <div className="col">
                                        <input type="text"
                                            className="form-control"
                                            id="nombre" />

                                    </div>
                                </div>
                                <div className="col">
                                    <select className="form-control" id="propietario" aria-label="Default select example">
                                        <option>Propietario</option>
                                        <option>Esteban</option>
                                        <option>Gabriela</option>
                                        <option>Pamela</option>
                                        <option>Otto</option>
                                        <option>Jorge</option>
                                        <option>Camilo</option>

                                    </select>

                                </div>

                            </form>

                        </div>
                        <div className="modal-footer">
                            <button id="btn-cancelar" type="button" className="btn btn-secondary"
                                data-bs-dismiss="modal">Cancelar</button>
                            <button id="btn-guardar" type="button" data-bs-dismiss="modal"
                                className="btn btn-primary">Guardar</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>);
}

export default Modal;






