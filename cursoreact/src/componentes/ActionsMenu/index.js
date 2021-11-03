import React  ,{useState} from "react"
import "./ActionsMenu.css"
import Alert from "../Alert"


function ActionMenu() {
    const [mostrarAlerta , setMostrarAlerta] = useState(false);
    return (
        <div className="actions-menu">
            <h1>Mascotas</h1>
            <div className="actions-menu-content">
                <button 
                type="button" 
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal"
                onClick={()=> setMostrarAlerta(!mostrarAlerta)}>
                    Nueva
                </button>

            </div>
            {mostrarAlerta && <Alert/>}
        </div>

    )
}

export default ActionMenu;