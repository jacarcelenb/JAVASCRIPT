import React from "react";
import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Veterinaria</a>
            <div className="container-fluid">
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

                        <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>

                    </ul>
                    
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
