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
    const {
        target: {value , name} ,
    } = evento;
    let {objeto} = {...this.state.objeto};
    objeto = {...objeto , [name] : value};
    this.setState({objeto})

    };
    crearEntidad = async () => {
        const {entidad} = this.props;
        const {objeto} = this.state;
        const method = "POST";
        await CrearEntidad({entidad ,objeto , method})
        this.cambiarModal();
        this.Listar();

    }

    // montar o establecer los valores de la lista en el componente
    // de la pagina despues del renderizado // metodo para la incializacion de los componentes
    // mostrar los datos en el componente de tabla
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
                cambiarModal = {this.cambiarModal} titulo = {titulo}/>
                <Tabla  entidades = {this.state.entidades}/>
                { this.state.mostrarModal && <Modal  
                cambiarModal = {this.cambiarModal} 
                manejarInput = {this.manejarInput}
                crearEntidad = {this.crearEntidad}/>}
              

            </div>);
    }

}

// exportar el componenete de REACT

export default Pagina;
