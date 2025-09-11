import React from "react";
import Header from "../components/header";
import Contactcard from "../components/contactcard";

export default function Legals() {
	return (
		<div className="min-vh-100">
			<Header title="Mentions légales" />
			<div className="accordion w-75 mx-auto" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="false"
							aria-controls="collapseOne"
						>
							Editeur du site
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							<Contactcard />
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							Hébergeur
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							<h4 className="fw-bold">alwaysdata</h4>
							<p>91 Rue du Faubourg saint-Honoré, 75008 Paris</p>
							<p>
								<i class="bi bi-globe"></i>{" "}
								<a href="https://www.alwaysdata.com">www.alwaysdata.com</a>
							</p>
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							Crédits
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<h4 className="fw-bold">Crédits</h4>
							<p>
								Ce site a été réalisé par Jane Doe, étudiante au{" "}
								<a href="https://www.centre-europeen-formation.fr/">
									Centre Européen de Formation
								</a>
								.
							</p>
							<p>
								Les images utilisées sur e site sont libres de droits et ont été
								obtenues sur le site{" "}
								<a href="https://pixabay.com/fr/">Pixabay</a>.
							</p>
							<p>
								La favicon de ce site a été fournie par{" "}
								<a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">
									John doe Icons erstellt von Freepik - Flaticon
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
