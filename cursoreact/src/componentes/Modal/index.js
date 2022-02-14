import React from "react";
import ModalHeader from "./ModalHeader";


function Modal() {
    return (<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <ModalHeader></ModalHeader>
                <div className="modal-body">
                    <form id="form">
                        <div className="col">
                            <label for="exampleInputEmail1" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" />

                        </div>

                        <br />
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
                        <br />
                        <div className="col">
                            <select className="form-control" id="tipoanimal" aria-label="Default select example">
                                <option>Tipo de animal</option>
                                <option>Perro</option>
                                <option>Gato</option>
                                <option>Pajaro</option>
                                <option>Otro</option>
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
    </div>);
}

export default Modal;






