import React from "react";
import MyModal from "../components/modal";

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
			<>
			<h5>{props.name} {props.percent}%</h5>
			<div className="progress mb-4" role="progressbar" aria-valuemin="0" aria-valuemax="100">
				<div className={props.progress} style={props.width}></div>
			</div>
			</>
		);
	};

	return (
		<>
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
						<Skills name="HTML5" percent="75" progress="progress-bar bg-danger w-75"/>
						<Skills name="CSS3" percent="75" progress="progress-bar bg-info w-75"/>
						<Skills name="JAVASCRIPT" percent="50" progress="progress-bar bg-warning w-50"/>
						<Skills name="PHP" percent="0" progress="progress-bar bg-success"/>
						<Skills name="REACT" percent="25" progress="progress-bar w-25"/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
