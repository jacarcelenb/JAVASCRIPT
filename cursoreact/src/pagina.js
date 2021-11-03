import React from 'react';
import ActionMenu from './componentes/ActionsMenu';
import Navbar from './componentes/navbar';
import Tabla from './componentes/Tabla';

function Mascotas() {
    return (
        <div className="container">

            <Navbar />
            <ActionMenu />
            <Tabla/>
           
        </div>);
}

// exportar el componenete de REACT

export default Mascotas;
