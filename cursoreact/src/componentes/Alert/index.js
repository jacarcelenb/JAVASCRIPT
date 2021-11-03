import React from "react"
import "./Alert.css"

function Alert() {
    return (
       


                <div id="liveToast" className="toast align-items-center text-white bg-danger border-0" role="alert"
                    aria-live="assertive" aria-atomic="true">
                    <div className="d-flex">
                        <div className="toast-body">
                            Error con el servidor.
                        </div>
                        <button type="button" className="btn-close btn-close-white me-5 m-auto" data-bs-dismiss="toast"
                            aria-label="Close"></button>
                    </div>
                </div>

        
    
    )
}

export default Alert;