import React from 'react';
import { ReactComponent as EditIcon } from '../assets/img/Edit.svg';
import Grade from "./Grade";

const StudentCard = () => {
  return(
    <article className="student-card">
      <div className="student-card_top">
        <div className="student-card_info">
          <h2 className="student-card_name">Dorian <span className="text-uppercase">Taing</span></h2>
          <a href="mailto:" className="student-card_email">dorian.taing@hetic.net</a>
        </div>
        <EditIcon className="student-card_edit"/>
      </div>
      <div className="student-card_desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="separator"/>
      <Grade subject="Programmation côté client" rating="B"/>
      <Grade subject="Programmation côté serveur" rating="C"/>
      <Grade subject="Design UI" rating="E"/>
      <Grade subject="Design UX" rating="D"/>
      <Grade subject="Gestion de projet" rating="D"/>
    </article>
  )
};

export default StudentCard;