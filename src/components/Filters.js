import React from 'react';
import { ReactComponent as AddIcon } from '../assets/img/Add.svg';

const Filters = ({openModal}) => {
  return(
    <section className="filters">
      <ul className="filters-list">
        <li className="filters-list_item active">
          Tout
        </li>
        <li className="filters-list_item">
          Programmation côté client
        </li>
        <li className="filters-list_item">
          Programmation côté serveur
        </li>
        <li className="filters-list_item">
          Design UI
        </li>
        <li className="filters-list_item">
          Design UX
        </li>
        <li className="filters-list_item">
          Gestion de projet
        </li>
      </ul>
      <div className="add-students" onClick={() => openModal(false)}>
        <AddIcon/>
        <button>Ajouter un élève</button>
      </div>
    </section>
  )
};

export default Filters;