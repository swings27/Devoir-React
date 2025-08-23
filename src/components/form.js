import React from "react";

export default function Form() {
	return (
		<form>
			<div className="mb-2">
				<input
					type="text"
					className="form-control"
					name="username"
					placeholder="Votre nom"
					required
				/>
			</div>
			<div className="mb-2">
				<input
					type="text"
					className="form-control"
					name="email"
					placeholder="Votre adresse mail"
					required
				/>
			</div>
			<div className="mb-2">
				<input
					type="number"
					className="form-control"
					name="phone number"
					placeholder="Votre numéro de téléphone"
					maxlength="10"
					required
				/>
			</div>
			<div className="mb-2">
				<input
					type="text"
					className="form-control"
					name="subject"
					placeholder="Sujet"
					minlength="10"
					maxlength="30"
					required
				/>
			</div>
			<div className="mb-2">
				<textarea
					name="message"
					className="form-control"
					placeholder="Votre message"
					rows="13"
					required
				></textarea>
			</div>
            <div className="d-grid col-2 mx-auto mt-3">
			 <button type="submit" className="btn btn-primary">Envoyer</button>
            </div>
		</form>
	);
}
