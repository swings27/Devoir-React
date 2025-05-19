import React from 'react';
import Header from '../components/header';

export default function Contact() {

    const Coordinates = (props) => {
        return ( <span>
            <img src={props.source} alt="icon"/>
            <p>{props.infos}</p>
        </span>
        );
    };

    return (
        <>
            <div>
                <Header title="Contact" description="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir
                le formulaire de contact." />
            </div>
            <div>
                <div className="formulaire">
                    <h2>Formulaire de contact</h2>
                    <hr />
                </div>
                <div className="infos">
                    <h2>Mes coordonnées</h2>
                    <hr />
                    <Coordinates infos="40 rue Laure Diebold" />
                    <Coordinates infos="69009 Lyon, France" />
                    <Coordinates infos="10 20 30 40 50" />
                    <Coordinates infos="john.doe@gmail.com" />
                </div>
            </div>
        </>
    );
};