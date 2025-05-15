import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header>
            <div>
                <h4>JOHN DOE</h4>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/services">SERVICES</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">PORTFOLIO</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    <li>
                        <Link to="/mentionslegales">MENTIONS LEGALES</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;