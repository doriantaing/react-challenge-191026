import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
  return(
    <section className="register">
      <div className="register-container">
        <h2 className="register-title">Inscription</h2>
        <form className="register-form">
          <div className="register-form_top">
            <input type="text" name="firstName" className="input-text" placeholder="Prénom"/>
            <input type="text" name="lastName" className="input-text" placeholder="Nom"/>
          </div>
          <input type="email" name="email" className="input-text" placeholder="Adresse e-mail"/>
          <input type="password" name="password" className="input-text" placeholder="Mot de passe"/>
          <input type="submit" value="S'inscrire" className="btn-green"/>
        </form>
        <Link to="/login" className="register-link">J'ai déjà un compte</Link>
      </div>
    </section>
  )
};

export default Register;