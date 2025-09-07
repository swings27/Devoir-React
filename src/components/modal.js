import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const MyModal = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [userData, setUserData] = useState(null);
	useEffect(() =>{
		fetch('https://api.github.com/users/swings27')
			.then(response => response.json())
			.then(data => setUserData(data));
	}, []);

	return (
		<>
			<Button variant="danger" onClick={handleShow}>
				En savoir plus
			</Button>
			<Modal show={show} onHide={handleClose} data-bs-theme="dark" className="modal-lg" centered>
				<Modal.Header closeButton>
					<Modal.Title>Mon profil GitHub</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{userData && (
						<div className="d-flex flex-row gap-4">
							<div className="p-1 w-50">
								<img src={userData.avatar_url} alt="murale de Arcane" width="100%"/>
							</div> 
							<div className="pt-2 w-50">
								<div><i class="bi bi-person"></i> {userData.login}</div>
								<hr />
								<div><i class="bi bi-geo-alt"></i> {userData.location} </div>
								<hr />
								<div><i class="bi bi-card-text"></i> {userData.bio}</div>
								<hr />
								<div><i class="bi bi-box"></i> Repositories : {userData.public_repos} </div>
								<hr />
								<div><i class="bi bi-people"></i> Followers : {userData.followers}</div>
								<hr />
								<div><i class="bi bi-people"></i> Following : {userData.following}</div>
							</div>
						</div>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Fermer
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default MyModal;
