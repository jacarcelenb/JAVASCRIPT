import React from "react";
import Search from "../Search";
import { Link } from "react-router-dom"
import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link className="navbar-brand" to="/">
                Veterinaria
            </Link>
            <div className="navbar-right" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Mascotas<span className="sr-only"></span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/veterinarios">
                            Veterinari@s
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/consultas">
                            Consultas
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/propietarios">
                            Dueños
                        </Link>
                    </li>
                </ul>
                <Search />
            </div>
        </nav>

    );
}

export default Navbar;
