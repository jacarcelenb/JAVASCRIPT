import React from 'react';

function Mascotas() {
    return (
        <div className="container">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Veterinaria</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./index.html">Mascotas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./veterinarios.html">Veterinarios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./consultas.html">Consultas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./duenos.html">Dueños</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="hmtl/mensajes.html">Mensajes</a>
                            </li>


                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="actions-menu">
                <h1>Mascotas</h1>
                <div className="actions-menu-content">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Nueva
                    </button>


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

                </div>
                <br />
                <br />
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Propietario</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="lista-mascotas">

                    </tbody>
                </table>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Nueva Mascota</h5>

                            <button id="btn-closemodal" type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="form">
                                <input type="hidden" id="indice" />
                                <div className="col">
                                    <label for="exampleInputEmail1" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" />

                                </div>
                                <br />
                                <div className="col">
                                    <select className="form-control" id="propietario" aria-label="Default select example">
                                        <option>Propietario</option>
                                        <option>Esteban</option>
                                        <option>Gabriela</option>
                                        <option>Pamela</option>
                                        <option>Otto</option>
                                        <option>Jorge</option>
                                        <option>Camilo</option>

                                    </select>

                                </div>
                                <br />
                                <div className="col">
                                    <select className="form-control" id="tipoanimal" aria-label="Default select example">
                                        <option>Tipo de animal</option>
                                        <option>Perro</option>
                                        <option>Gato</option>
                                        <option>Pajaro</option>
                                        <option>Otro</option>
                                    </select>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button id="btn-cancelar" type="button" className="btn btn-secondary"
                                data-bs-dismiss="modal">Cancelar</button>
                            <button id="btn-guardar" type="button" data-bs-dismiss="modal"
                                className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

// exportar el componenete de REACT

export  default Mascotas;
