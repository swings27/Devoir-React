import React from "react";
import { NavLink } from 'react-router-dom';

function Nav() {

    const Pages = (props) => {
        return (
           <NavLink to={props.page} className="nav-link text-white" style={({ isActive, isPending }) => ({
                fontWeight:
                    isActive ? "600" :
                    isPending ? "600" : "",
                textDecoration :
                    isActive ? "underline"  :
                    isPending ? "underline" : ""                                
            })} >{props.name}</NavLink> 
        )
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-uppercase">jane doe</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav"> 
                        <ul className="navbar-nav text-uppercase text-white">
                            <li className="nav-item">
                                <Pages page="/" name="home" />
                            </li>
                            <li className="nav-item">
                                <Pages page="/services" name="services" />
                            </li>
                            <li className="nav-item">
                                <Pages page="/portfolio" name="portfolio" />
                            </li>
                            <li className="nav-item">
                                <Pages page="/contact" name="contact" />
                            </li>
                            <li className="nav-item">
                                <Pages page="/legals" name="mentions légales" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Nav;