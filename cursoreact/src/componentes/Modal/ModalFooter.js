import React from 'react'
import "./ModalFooter.css"
export const ModalFooter = ({cambiarModal = () => {}}) => {
    return (
        <div className="modal-footer">
            <button id="btn-cancelar" type="button" className="btn btn-secondary"
                data-bs-dismiss="modal" onClick={cambiarModal}>Cancelar</button>
            <button id="btn-guardar" type="button" data-bs-dismiss="modal"
                className="btn btn-primary">Guardar</button>
        </div>
    )
}