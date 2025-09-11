import React from "react";
import MyModal from "../components/modal";
import ProgressBar from 'react-bootstrap/ProgressBar'

function Home() {
	const Lorem = () => {
		return (
			<p className="card-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
				interdum justo. Proin imperdiet non diam id pellentesque. Morbi iaculis,
				sem vel rhoncus maximus, dolor.
			</p>
		);
	};

	const Skills = (props) => {
		return (
			<div className="pb-4">
			<h5>{props.name} {props.percent}%</h5>
			<ProgressBar variant={props.progress} now={props.percent}/>
			</div>
		);
	};

	return (
		<div>
			<section className="firstsection text-white">
				<div
					className="img-fluid"
					style={{ backgroundImage: "url('./hero-bg.jpg')", backgroundSize: "cover", height: "99vh" }}>
					<div className="text-center"
					style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
						<h1 className="display-4 fw-bold mb-4">Bonjour, je suis Jane Doe</h1>
						<h2 className="display-6 fw-bold mb-4">Développeur web full stack</h2>
						<MyModal />
					</div>
				</div>
			</section>
			<section className="container my-5 mx-auto p-4 w-75" style={{ boxShadow: "0 2px 10px lightgrey", borderRadius: "10px" }}>
				<div className="d-sm-flex flex-row gap-4">
					<div classname="col-sm-6">
						<h3 className="fw-bold">A propos</h3>
						<hr className="border border-primary border-3 opacity-75 mb-5" />
						<img
							src="./john-doe-about.jpg"
							alt="portrait d'une personne"
							width= "100%"
							/>
							<div className="my-4">
								<Lorem />
								<Lorem />
								<Lorem />
							</div>
					</div>
					<div className="col-sm-6">
						<h3 className="fw-bold">Mes compétences</h3>
						<hr className="border border-primary border-3 opacity-75 mb-5" />
						<div className="my-4 p-2">
						<Skills name="HTML5" percent="90" progress="danger"/>
						<Skills name="CSS3" percent="80" progress="info"/>
						<Skills name="JAVASCRIPT" percent="70" progress="warning"/>
						<Skills name="PHP" percent="60" progress="success"/>
						<Skills name="REACT" percent="50"/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
