import React from "react";
import Header from "../components/header";
import Form from "../components/form";
import MyMap from "../components/map";

export default function Contact() {
	const Coordinates = (props) => {
		return (
			<p className="m-0">
				<i className={props.icon}></i> {props.infos}
			</p>
		);
	};

	return (
		<>
			<div>
				<Header
					title="Contact"
					description="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir
                le formulaire de contact."
				/>
			</div>
			<div className="card my-5 mx-auto p-3" style={{ width: "60vw" }}>
				<div className="d-flex flex-row gap-4">
					<div className="formulaire w-50">
						<h2>Formulaire de contact</h2>
						<hr className="border border-primary border-3 opacity-75 mb-5" />
						<Form />
					</div>
					<div className="infos w-50">
						<h2>Mes coordonnées</h2>
						<hr className="border border-primary border-3 opacity-75 mb-5" />
						<div className="mb-4">
                            <h4 className="mb-3">Jane Doe</h4>
							<Coordinates icon="bi bi-map" infos="40 rue Laure Diebold" />
							<Coordinates icon="bi bi-geo-alt" infos="69009 Lyon, France" />
							<Coordinates icon="bi bi-phone" infos="10 20 30 40 50" />
							<Coordinates
								icon="bi bi-envelope-at"
								infos="john.doe@gmail.com"
							/>
						</div>
						<MyMap />
					</div>
				</div>
			</div>
		</>
	);
}
