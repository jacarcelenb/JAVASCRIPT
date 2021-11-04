import React from "react"
import "./Alert.css"

function Alert(props) {
    return (
        <div className="alert alert-danger alert-dismissible" role="alert">
            <strong>Error</strong> con el servidor.
            <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>



    )
}

export default Alert;