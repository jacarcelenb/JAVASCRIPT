import React from "react"
import "./ActionsMenu.css"
import Alert from "../Alert"

function ActionMenu() {
    return (
        <div className="actions-menu">
            <h1>Mascotas</h1>
            <div className="actions-menu-content">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Nueva
                </button>

            </div>
            <Alert/>
        </div>

    )
}

export default ActionMenu;