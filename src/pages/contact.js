import React from "react";
import Header from "../components/header";
import Form from "../components/form";
import MyMap from "../components/map";
import Contactcard from "../components/contactcard";

export default function Contact() {

	return (
		<>
			<div>
				<Header
					title="Contact"
					description="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir
                le formulaire de contact."
				/>
			</div>
			<div className="container-fluid mx-auto p-4 w-75 mb-5" style={{ boxShadow: "0 2px 10px lightgrey", borderRadius: "10px" }}>
				<div className="d-sm-flex flex-row gap-4 me-4">
					<div className="col-sm-6">
						<h2 className="fw-bold">Formulaire de contact</h2>
						<hr className="border border-primary border-3 opacity-75 mb-5" />
						<Form />
					</div>
					<div className="col-sm-6">
						<h2 className="fw-bold">Mes coordonnées</h2>
						<hr className="border border-primary border-3 opacity-75 mb-5" />
						<div className="mb-4">
                            <Contactcard />
						</div>
						<MyMap />
					</div>
				</div>
			</div>
		</>
	);
}
