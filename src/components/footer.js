import React from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";

export default function Footer() {
	const Project = (props) => {
		return (
			<Link to="/portfolio" className="nav-link">
				{props.name}
			</Link>
		);
	};

	return (
		<footer
			className="mt-auto text-white bg-dark border-body"
			data-bs-theme="dark"
		>
			<div className="container">
				<div className="d-flex flex-row">
					<div className="infos col-md-4 mb-3">
						<h4>John Doe</h4>
						<div>40 rue Laure Diebold</div>
						<div>69009 LYON, France</div>
						<a href="tel:1020304050" className="nav-link">
							10 20 30 40 50
						</a>
						<a href="mailto:jane.doe@gmail.com" className="nav-link">
							jane.doe@gmail.com
						</a>
						<ul className="list-inline social-icons">
							<li className="list-inline-item">
								<a href="#">
									<i className="bi bi-github"></i>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="#">
									<i className="bi bi-twitter"></i>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="#">
									<i className="bi bi-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
					<div className="navigation col-md-4 mb-3">
						<h4>Liens utiles</h4>
						<ul className="list-unstyled">
							<li className="nav-item">
								<Link to="/" className="nav-link">
									Accueil
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/services" className="nav-link">
									Services
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/portfolio" className="nav-link">
									Portfolio
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className="nav-link">
									Me contacter
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/mentionslegales" className="nav-link">
									Mentions légales
								</Link>
							</li>
						</ul>
					</div>
					<div className="projects col-md-4 mb-3">
						<h4>Mes dernières réalisations</h4>
						<ul className="list-unstyled">
							<li className="nav-item">
								<Project name="Fresh Food" />
							</li>
							<li className="nav-item">
								<Project name="Restaurant Akira" />
							</li>
							<li className="nav-item">
								<Project name="Espace bien-être" />
							</li>
							<li className="nav-item">
								<Project name="SEO" />
							</li>
							<li className="nav-item">
								<Project name="Création d'une API" />
							</li>
							<li className="nav-item">
								<Project name="Maquette d'un site" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
