import React from 'react';
import Header from '../components/header';

export default function Portfolio() {

    const Work = (props) => {
        return (
            <div>
                <img src={props.source} alt={props.alternative} height="200"/>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button>Voir le site</button>
                <p>{props.skills}</p>
            </div>
        );
    };

    return (
        <>
            <div>
                <Header source="./banner.jpg" alt="image graphique bleue" title="Portfolio" description="Voici quelques-unes de mes réalisations." />
            </div>
            <div>
                <Work source="./portfolio/fresh-food.jpg" 
                alternative="panier de légumes frais" 
                title="Fresh Food" 
                description="Site de vente de produits frais en ligne"
                skills="Site réalisé avec PHP et MySQL" />
                <Work source="./portfolio/restaurant-japonais.jpg" 
                alternative="plateau de sushis" 
                title="Restaurant Akira" 
                description="Site internet d'un restaurant japonais"
                skills="Site réalisé avec Wordpress" />
                <Work source="./portfolio/espace-bien-etre.jpg" 
                alternative="pierres et statue de bouddha" 
                title="Espace bien-être" 
                description="Site internet d'un salon de bien-être"
                skills="Site réalisé avec LARAVEL" />
                <Work source="./portfolio/seo.jpg" 
                alternative="SEO et champ lexical" 
                title="SEO" 
                description="Amélioration du référencement d'un site e-commerce"
                skills="Utilisation des outils SEO" />
                <Work source="./portfolio/coder.jpg" 
                alternative="écran de lignes de code" 
                title="Création d'une API" 
                description="Création d'une API RESTFULL publique"
                skills="PHP - SYMFONY" />
                <Work source="./portfolio/screens.jpg" 
                alternative="Ecrans divers" 
                title="Maquette d'un site web" 
                description="Création du prototype d'un site"
                skills="Réalisé avec FIGMA" />
            </div>
        </>
    )
};