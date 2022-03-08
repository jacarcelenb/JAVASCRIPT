import React, { Component } from 'react';
import ActionMenu from './componentes/ActionsMenu';
import Tabla from './componentes/Tabla/index';
import Modal from './componentes/Modal/index';
import { ListarEntidad, CrearEntidad, EliminarEntidad } from "./servicio";

class Pagina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
            entidades: [],
            objeto: {},
            idObjeto: null,
            method: "POST",
            columnas: [],
        };

    }
    // codigo del componente
    cambiarModal = (evento, method = "POST") => {
        this.setState({ mostrarModal: !this.state.mostrarModal, method })
    };

    // listar entidades
    Listar = async () => {
        const { entidad } = this.props
        const entidades = await ListarEntidad(entidad);
        let columnas = []
        if (Array.isArray(entidades) && entidades.length > 0) {
            columnas = Object.keys(entidades[0]) || [];
        }

        this.setState({entidades , columnas});
       
    }

    manejarInput = (evento) => {
        const {
            target: { value, name },
        } = evento;
        let { objeto } = { ...this.state.objeto };
        objeto = { ...objeto, [name]: value };
        this.setState({ objeto })

    };
    crearEntidad = async () => {
        const { entidad } = this.props;
        const { objeto, method } = this.state;
        await CrearEntidad({ entidad, objeto, method })
        this.cambiarModal();
        this.Listar();


    }

    editarEntidad = (evento, index) => {
        const objeto = { ...this.state.entidades[index] };
        this.setState({ objeto, idObjeto: index }, async () => {
            this.cambiarModal(null, "PUT");

        })


    }

    eliminarEntidad = async (_evento, index) => {
        const { entidad } = this.props;
        const respuesta = await EliminarEntidad({ entidad, idObjeto: index });
        console.log(respuesta)
        this.Listar();


    }

    // montar o establecer los valores de la lista en el componente
    // de la pagina despues del renderizado // metodo para la incializacion de los componentes
    // mostrar los datos en el componente de tabla
    componentDidMount() {
        this.Listar();
    }

    // metodo render debe ir siempre al final
    render() {
        const { titulo = "Pagina sin titulo" } = this.props;
        return (

            <>
                <ActionMenu
                    cambiarModal={this.cambiarModal} titulo={titulo} />
                <Tabla entidades={this.state.entidades}
                    editarEntidad={this.editarEntidad}
                    eliminarEntidad={this.eliminarEntidad} />
                {this.state.mostrarModal && <Modal
                    cambiarModal={this.cambiarModal}
                    manejarInput={this.manejarInput}
                    crearEntidad={this.crearEntidad}
                    objeto={this.state.objeto}
                    columnas = {this.state.columnas}
                />}

            </>
        );
    }

}

// exportar el componenete de REACT

export default Pagina;
