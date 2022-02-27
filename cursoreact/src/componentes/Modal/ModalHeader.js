import React from "react";
import "./ModalHeader.css"

function ModalHeader({cambiarModal = () => {}}) {
return(
    <div className="modal-header">
    <h5 className="modal-title" id="exampleModalLabel">Nueva Mascota</h5>

    <button id="btn-closemodal" type="button" className="close" data-bs-dismiss="modal"
        aria-label="Close"
        onClick={cambiarModal}></button>
</div>
)
}

export default ModalHeader;