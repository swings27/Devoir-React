import React from "react";

export default function Navmenu() {
    const Navmenu = (props) => {
        return <a href={props.url}>{props.page}</a>;
      };
    
      return (
        <div className="navmenu">
          <div>
            <h3>JOHN DOE</h3>
          </div>
          <div>
            <Navmenu url="" page="Home" />
            <Navmenu url="" page="Services" />
            <Navmenu url="" page="Portfolio" />
            <Navmenu url="" page="Contact" />
            <Navmenu url="" page="Mentions légales" />
          </div>
        </div>
      );
}