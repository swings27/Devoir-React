import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">JOHN DOE</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav"> 
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link">SERVICES</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/mentionslegales" className="nav-link">MENTIONS LEGALES</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Nav;