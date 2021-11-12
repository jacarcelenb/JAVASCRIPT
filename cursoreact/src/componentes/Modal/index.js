import React from "react";


function Modal() {
 return ( <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
             <div class="modal-content"> 
               <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Nueva Mascota</h5>

                        <button id="btn-closemodal" type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button> 
                </div>
                <div class="modal-body">
                 <form id="form"> 
                  <input type="hidden" id="indice"/>
                            <div class="col">
                                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="nombre"/>

                            </div>

                             <br />
                            <div class="col">
                                <select class="form-control" id="propietario" aria-label="Default select example">
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
                            <div class="col">
                                <select class="form-control" id="tipoanimal" aria-label="Default select example">
                                    <option>Tipo de animal</option>
                                    <option>Perro</option>
                                    <option>Gato</option>
                                    <option>Pajaro</option>
                                    <option>Otro</option>
                                </select>
                            </div>

                 
                 </form>
                
                </div>
                <div class="modal-footer">
                        <button id="btn-cancelar" type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Cancelar</button>
                        <button id="btn-guardar" type="button" data-bs-dismiss="modal"
                            class="btn btn-primary">Guardar</button>
                    </div>
                
             </div>
            </div>
        </div>);
}

export default Modal;






