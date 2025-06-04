import React from 'react';
import Header from '../components/header'

export default function Services() {

    const Offer = (props) => {
        return (
            <div>
                <img src={props.source} alt={props.alternative} />
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        );
    };

    return (
        <>
            <div>
                <Header source="./banner.jpg" alt="image graphique bleue" title="Mon offre de services" description="Voici les prestations sur lesquelles je peux intervenir" />
            </div>
            <div className="services">
                <Offer source="" alternative="logo pinceau" name="UX Design" description="L'UX design est une discipline qui consiste à concevoir des produits (sites web,
                 applications mobiles, logiciels, objets connectés,etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est 
                 de rendre l'expérience utilisateur la plus fluide et agréable possible." />
                <Offer source="" alternative="balise fermeture" name="Développement web" description="Le développement web de sites web consiste à créer des sites internet 
                en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)." />
                <Offer source="" alternative="loupe" name="Référencement" description="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web 
                pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum 
                de visiteurs qualifiés sur le site." />
            </div>
        </>
    );
};