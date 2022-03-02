import React, { Component } from 'react';
import ActionMenu from './componentes/ActionsMenu';
import Navbar from './componentes/navbar';
import Tabla from './componentes/Tabla/index';
import Modal from './componentes/Modal/index';
import {ListarEntidad , CrearEntidad} from "./servicio";

class Pagina extends Component {
    constructor(props){
        super(props);
        this.state = {
            mostrarModal: false,
            entidades: [],
            objeto: {},
        };
       
    }
    // codigo del componente
    cambiarModal = () =>{
    this.setState({mostrarModal: !this.state.mostrarModal})
    };

    // listar entidades
    Listar = async () =>{
        const {entidad} = this.props
        const entidades = await ListarEntidad(entidad);
        this.setState({entidades})
    }

    manejarInput = (evento) =>{
        console.log(evento.persist());
    }
    crearEntidad() {

    }

    // montar o establecer los valores de la lista en el componente
    // de la pagina despues del renderizado
    componentDidMount (){
        this.Listar();
    }

    // metodo render debe ir siempre al final
    render() {
        const {titulo = "Pagina sin titulo"} = this.props;
        return (
            <div className="container">
                <Navbar />

                <ActionMenu  
                manejarInput = {this.manejarInput}
                cambiarModal = {this.cambiarModal} titulo = {titulo}/>
                <Tabla  entidades = {this.state.entidades}/>
                { this.state.mostrarModal && <Modal  
                cambiarModal = {this.cambiarModal} 
                manejarInput = {this.manejarInput}/>}
              

            </div>);
    }

}

// exportar el componenete de REACT

export default Pagina;
