import React from "react";
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
		<footer className="text-white bg-dark border-body" data-bs-theme="dark">
			<div className="container-fluid">
				<div className="d-sm-flex flex-row mx-auto w-75 p-5">
					<div className="col-sm-4">
						<h4>Jane Doe</h4>
						<div>40 rue Laure Diebold</div>
						<div>69009 LYON, France</div>
						<a href="tel:1020304050" className="nav-link">
							10 20 30 40 50
						</a>
						<a href="mailto:jane.doe@gmail.com" className="nav-link">
							jane.doe@gmail.com
						</a>
						<div className="pt-3">
							<ul className="list-inline social-icons">
								<li className="list-inline-item">
									<a
										href="https://github.com/swings27"
										target="_blank"
										rel="nofollow"
									>
										<i className="bi bi-github"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="https://x.com/" target="_blank" rel="nofollow">
										<i className="bi bi-twitter"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										href="https://www.linkedin.com/in/anna-trabaud-b299a3180/"
										target="_blank"
										rel="nofollow"
									>
										<i className="bi bi-linkedin"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-sm-4">
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
					<div className="col-sm-4">
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
