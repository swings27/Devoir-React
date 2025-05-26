import React from 'react';

export default function Form() {
    return (
        <form >  
            <input 
                type ="text" 
                name="username" 
                placeholder="Votre nom" 
                required />
            <br />
            <input 
                type="text" 
                name="email" 
                placeholder="Votre adresse mail" 
                required />
            <br />
            <input 
                type="number" 
                name="phone number" 
                placeholder="Votre numéro de téléphone" 
                maxlength="10" 
                required/>
            <br />
            <input 
                type="text" 
                name="subject" 
                placeholder="Sujet" 
                minlength="10" 
                maxlength="30" 
                required/>
            <br />
            <textarea 
                name="message" 
                placeholder="Votre message" 
                rows="20" cols="80" 
                required>
            </textarea>
            <br />
            <button type="submit">Envoyer</button>
        </form>
    );
};