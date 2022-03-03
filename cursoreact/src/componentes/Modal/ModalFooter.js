import React from 'react'
import "./ModalFooter.css"
export const ModalFooter = ({cambiarModal = () => {} , crearEntidad = () => {}}) => {
    return (
        <div className="modal-footer">
            <button id="btn-cancelar" type="button" className="btn btn-secondary"
                onClick={cambiarModal}>Cancelar</button>
            <button id="btn-guardar" type="button"
                className="btn btn-primary"
                onClick={crearEntidad}
                >Guardar</button>
        </div>
    )
}
