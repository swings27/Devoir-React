import React from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";

export default function Footer() {

const Project = (props) => {
  return <Link to="/portfolio"><p>{props.name}</p></Link>
};

  return (
    <> 
      <div className="infos">
        <h3>John Doe</h3>
          <p>
            40 rue Laure Diebold 69009 LYON, France
          </p>
          <div>
            <a href="tel:1020304050">10 20 30 40 50</a>
          </div>
          <div>
            <a href="mailto:jane.doe@gmail.com">jane.doe@gmail.com</a>
          </div>
      </div>
      <div className="navigation">
        <h3>Liens utiles</h3>
        <Nav />
      </div>
      <div className="projects">
        <h3>Mes dernières réalisations</h3>
          <Project name="Fresh Food" />
          <Project name="Restaurant Akira" />
          <Project name="Espace bien-être" />
          <Project name="SEO" />
          <Project name="Création d'une API" />
          <Project name="Maquette d'un site" />
      </div>
    </>
  );
}