import React from 'react';
import {
  BrowserRouter as AppRouter,
  Route,
  Switch
} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import StoreProvider from "../services/StoreProvider";

// VIEWS
import LoginContainer from "../views/Login/LoginContainer";
import HomeContainer from "../views/Home/HomeContainer";
import RegisterContainer from "../views/Register/RegisterContainer";

const Router = () => {
  return(
    <AppRouter>
      <StoreProvider>
        <Switch>
          <PrivateRoute exact path="/">
            <HomeContainer/>
          </PrivateRoute>
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
        </Switch>
      </StoreProvider>
      <footer className="footer">
        <p className="footer-text">LIST DISCENTIUM © 2019 — Projet réalisé par Billal Ouaali, Théo Larue, Fabien Marques, Dorian Taing et Alexandre Martins.</p>
      </footer>
    </AppRouter>
  )
};

export default Router;