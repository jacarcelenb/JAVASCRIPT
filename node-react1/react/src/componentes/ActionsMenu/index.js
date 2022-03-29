import React   from "react"
import "./ActionsMenu.css"
import Search from "../Search"


function ActionMenu({cambiarModal = () => {} , titulo,
manejarsearchInput = () => {} ,
buscar = () =>{},}) {
   
    return (
        <div className="actions-menu">
            <h1>{titulo}</h1>
            <div className="actions-menu-content">
                <button 
                type="button" 
                className="btn btn-primary" 
                onClick={cambiarModal}>
                    Nueva
                </button>
                <Search manejarsearchInput={manejarsearchInput}/>

            </div>
            
        </div>

    )
}

export default ActionMenu;