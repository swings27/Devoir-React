import React from "react";
import Header from "../components/header";

export default function Services() {
	const Offer = (props) => {
		return (
			<div className="card col-sm-4 my-3 text-center pt-4">
				<i className={props.icon} style={{ fontSize: "2em" }} />
				<div className="card-body">
					<h4 className="card-title fw-bold">{props.name}</h4>
					<p className="card-text">{props.description}</p>
				</div>
			</div>
		);
	};

	return (
		<>
			<div>
				<Header
					source="./banner.jpg"
					alt="image graphique bleue"
					title="Mon offre de services"
					description="Voici les prestations sur lesquelles je peux intervenir"
				/>
			</div>
			<div className="container-fluid">
				<div className="d-sm-flex flex-row mb-5 mx-auto justify-content-center gap-3 w-75">
					<Offer
						icon="bi bi-brush text-primary"
						name="UX Design"
						description="L'UX design est une discipline qui consiste à concevoir des produits (sites web,
					applications mobiles, logiciels, objets connectés,etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est 
					de rendre l'expérience utilisateur la plus fluide et agréable possible."
					/>
					<Offer
						icon="bi bi-code-slash text-primary"
						name="Développement web"
						description="Le développement web de sites web consiste à créer des sites internet 
					en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."
					/>
					<Offer
						icon="bi bi-search text-primary"
						name="Référencement"
						description="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web 
					pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum 
					de visiteurs qualifiés sur le site."
					/>
				</div>
			</div>
		</>
	);
}
