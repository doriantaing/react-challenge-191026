import React from 'react';
import { Link } from "react-router-dom";

const Register = ({state, changeInputValue, submitForm}) => {
  return(
    <section className="register">
      <div className="register-container">
        <h2 className="register-title">Inscription</h2>
        <form className="register-form" onSubmit={submitForm}>
          <div className="register-form_top">
            <input
              type="text"
              name="first_name"
              className="input-text"
              placeholder="Prénom"
              value={state.first_name}
              onChange={changeInputValue}
              required
            />
            <input
              type="text"
              name="last_name"
              className="input-text"
              placeholder="Nom"
              value={state.last_name}
              onChange={changeInputValue}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            className="input-text"
            placeholder="Adresse e-mail"
            value={state.email}
            onChange={changeInputValue}
            required
          />
          <input
            type="password"
            name="password"
            className="input-text"
            placeholder="Mot de passe"
            value={state.password}
            onChange={changeInputValue}
            required
          />
          <input type="submit" value="S'inscrire" className="btn-green"/>
        </form>
        <Link to="/login" className="register-link">J'ai déjà un compte</Link>
      </div>
    </section>
  )
};

export default Register;