import React from 'react';
import Pagina from './pagina';
import { Route, Switch } from "react-router-dom"
import Navbar from './componentes/navbar';


function App() {
  return (
    <div className='container'>
        <Navbar></Navbar>
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => (
              <Pagina {...props} titulo="Mascotas" entidad="mascotas" />
            )}
          />
          <Route
            path="/veterinarios"
            component={(props) => (
              <Pagina {...props} titulo="Veterinari@s" entidad="veterinarios" />
            )}
          />
          <Route
            path="/propietarios"
            component={(props) => (
              <Pagina {...props} titulo="Dueñ@s" entidad="propietarios" />
            )}
          />
          <Route
            path="/consultas"
            component={(props) => (
              <Pagina {...props} titulo="Consultas" entidad="consultas" />
            )}
          />
        </Switch>


    </div>


  );
}

export default App;
