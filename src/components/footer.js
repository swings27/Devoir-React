import React from "react";
import Navmenu from "./nav";

export default function Footer() {
  return (
    <div className="footer"> 
      <div>
        <h4>John Doe</h4>
        <p>Contact infos</p>
      </div>
      <div>
        <h4>Liens utiles</h4>
            <Navmenu url="" page="Accueil" />
            <Navmenu url="" page="Services" />
            <Navmenu url="" page="Portfolio" />
            <Navmenu url="" page="Contact" />
            <Navmenu url="" page="Mentions légales" />
      </div>
      <div>
        <h4>Mes dernières réalisations</h4>
      </div>
    </div>
  );
}