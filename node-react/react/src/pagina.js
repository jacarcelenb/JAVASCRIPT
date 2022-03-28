import React, { Component } from "react";
import ActionsMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";
import {
  ListarEntidad,
  CrearEntidad,
  EliminarEntidad,
  Listaruna,
} from "./servicio";
import ComponenteCampo from "./componentes/ComponenteCampo";

const opcionesIniciales = {
  tipo: [
    { valor: "Perro", etiqueta: "Perro" },
    { valor: "Gato", etiqueta: "Gato" },
    { valor: "Pájaro", etiqueta: "Pájaro" },
    { valor: "Otro", etiqueta: "Otro" },
  ],
  diagnostico: [
    { valor: "Prurito de piel (sarna)", etiqueta: "Prurito de piel (sarna)" },
    { valor: "Moquillo", etiqueta: "Moquillo" },
    { valor: "Trauma cefálico", etiqueta: "Trauma cefálico" },
    { valor: "Parvovirosis", etiqueta: "Parvovirosis" },
  ],
  mascota: [],
  veterinario: [],
  propietario: [],
};

class Pagina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostraModal: false,
      entidades: [],
      objeto: {},
      idObjeto: null,
      method: "POST",
      columnas: [],
      options: opcionesIniciales,
    };
  }

  cambiarModal = (_evento, method = "POST", newState = {}) => {
    let _newState = {
      ...newState,
      mostraModal: !this.state.mostraModal,
      method,
    };
    if (method === "POST") {
      _newState = { ..._newState, idObjeto: null, objeto: {} };
    }
    this.obtenerOpcionesBackend(_newState);
  };

  listar = async () => {
    const { entidad } = this.props;
    const entidades = await listarEntidad({ entidad });
    let columnas = [];
    if (Array.isArray(entidades) && entidades.length > 0) {
      columnas = Object.keys(entidades[0]) || [];
    }
    this.setState({ entidades, columnas });
  };

  manejarInput = (evento) => {
    const {
      target: { value, name },
    } = evento;
    let { objeto } = this.state;
    objeto = { ...objeto, [name]: value };
    this.setState({ objeto });
  };

  crearEntidad = async (_evento = null) => {
    const { entidad } = this.props;
    let { objeto, method, idObjeto } = this.state;
    await CrearEntidad({ entidad, objeto, method, idObjeto });
    this.cambiarModal();
  };

  obtenerOpcionesBackend = async (newState) => {
    const { options } = this.state;
    const mascotasPromise =ListarEntidad({ entidad: "mascotas" });
    const veterinariasPromise = ListarEntidad({ entidad: "veterinarios" });
    const duenosPromise = listarEntidad({ entidad: "propietarios" });
    let [mascota = [], veterinario = [], propietario = []] = await Promise.all([
      mascotasPromise,
      veterinariasPromise,
      duenosPromise,
    ]);
    mascota = mascota.map((_mascota, index) => ({
      valor: index.toString(),
      etiqueta: `${_mascota.nombre} (${_mascota.tipo})`,
    }));
    veterinario = veterinario.map((_veterinario, index) => ({
      valor: index.toString(),
      etiqueta: `${_veterinario.nombre} ${_veterinario.apellido}`,
    }));
    propietario = propietario.map((_propietario, index) => ({
      valor: index.toString(),
      etiqueta: `${_propietario.nombre} ${_propietario.apellido}`,
    }));
    const nuevasOpciones = { ...options, mascota, veterinario, propietario};
    this.setState({ ...newState, options: nuevasOpciones }, () => {
      this.listar();
    });
  };

  editarEntidad = async (_evento, index) => {
    const { entidad } = this.props;
    const objeto = await Listaruna({ entidad, idObjeto: index });
    const newState = { objeto, idObjeto: index };
    this.cambiarModal(null, "PUT", newState);
  };

  eliminarEntidad = async (_evento, index) => {
    const { entidad } = this.props;
    const respuesta = await EliminarEntidad({ entidad, idObjeto: index });
    this.listar();
  };

  componentDidMount() {
    this.listar();
  }

  // codigo del componente

  // el método render siempre debe ir de último
  render() {
    const { titulo = "Página sin título", entidad } = this.props;
    const { columnas, idObjeto, entidades, objeto, options } = this.state;
    return (
      <>
        <ActionsMenu cambiarModal={this.cambiarModal} titulo={titulo} />
        <Tabla
          entidades={entidades}
          editarEntidad={this.editarEntidad}
          eliminarEntidad={this.eliminarEntidad}
          columnas={columnas}
        />
        {this.state.mostraModal && (
          <Modal
            cambiarModal={this.cambiarModal}
            manejarInput={this.manejarInput}
            crearEntidad={this.crearEntidad}
            entidad={entidad}
            idObjeto={idObjeto}
          >
            {columnas.map((columna, index) => (
              <ComponenteCampo
                key={index}
                manejarInput={this.manejarInput}
                objeto={objeto}
                nombreCampo={columna}
                options={options}
              />
            ))}
          </Modal>
        )}
      </>
    );
  }
}

export default Pagina;