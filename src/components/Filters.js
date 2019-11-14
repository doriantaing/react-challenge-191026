import React from 'react';
import { ReactComponent as AddIcon } from '../assets/img/Add.svg';

const Filters = ({openModal, filterStudents, currentFilter}) => {
  return(
    <section className="filters">
      <ul className="filters-list">
        <li onClick={() => filterStudents('all')} className={`filters-list_item ${currentFilter === 'all'? 'active' : ''} `}>
          Tout
        </li>
        <li onClick={() => filterStudents('client_side_programming')}  className={`filters-list_item ${currentFilter === 'client_side_programming'? 'active' : ''} `}>
          Programmation côté client
        </li>
        <li onClick={() => filterStudents('back_side_programming')} className={`filters-list_item ${currentFilter === 'back_side_programming'? 'active' : ''} `}>
          Programmation côté serveur
        </li>
        <li onClick={() => filterStudents('ui_design')} className={`filters-list_item ${currentFilter === 'ui_design'? 'active' : ''} `}>
          Design UI
        </li>
        <li onClick={() => filterStudents('ux_design')} className={`filters-list_item ${currentFilter === 'ux_design'? 'active' : ''} `}>
          Design UX
        </li>
        <li onClick={() => filterStudents('project_management')} className={`filters-list_item ${currentFilter === 'project_management'? 'active' : ''} `}>
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