import React, { Component } from 'react';
import ActionMenu from './componentes/ActionsMenu';
import Navbar from './componentes/navbar';
import Tabla from './componentes/Tabla/index';
import Modal from './componentes/Modal/index';

class Pagina extends Component {
    constructor(props){
        super(props);
        this.state = {
            mostrarModal: false,
        };
       
    }
    // codigo del componente
    cambiarModal = () =>{
    this.setState({mostrarModal: !this.state.mostrarModal})
    };

    // metodo render debe ir siempre al final
    render() {
        return (
            <div className="container">
                <Navbar />
                { this.state.mostrarModal && <Modal />}

                <ActionMenu  cambiarModal = {this.cambiarModal}/>
                <Tabla />
              

            </div>);
    }

}

// exportar el componenete de REACT

export default Pagina;
