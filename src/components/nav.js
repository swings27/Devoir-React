import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
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
    );
};

export default Nav;