import React from 'react';
import Header from "./components/Header";
import Home from './views/Home/Home';
import StoreProvider from "./context/StoreProvider";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <StoreProvider>
        <Home/>
      </StoreProvider>
      <footer className="footer">
        <p className="footer-text">LIST DISCENTIUM © 2019 — Projet réalisé par Billal Ouaali, Théo Larue, Fabien Marques, Dorian Taing et Alexandre Martins.</p>
      </footer>
    </div>
  );
}

export default App;
