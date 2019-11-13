import React from 'react';
import { ReactComponent as EditIcon } from '../assets/img/Edit.svg';
import Grade from "./Grade";

const StudentCard = ({info, openModal}) => {
  return(
    <article className="student-card">
      <div className="student-card_top">
        <div className="student-card_info">
          <h2 className="student-card_name">{info.first_name} <span className="text-uppercase">{info.last_name}</span></h2>
          <a href={`mailto:${info.email}`} className="student-card_email">{info.email}</a>
        </div>
        <EditIcon className="student-card_edit" onClick={() => openModal(true, info.student_id)}/>
      </div>
      <div className="student-card_desc">
        <p>{info.description}</p>
      </div>
      <div className="separator"/>
      <Grade subject="Programmation côté client" rating={info.client_side_programming}/>
      <Grade subject="Programmation côté serveur" rating={info.back_side_programming}/>
      <Grade subject="Design UI" rating={info.ui_design}/>
      <Grade subject="Design UX" rating={info.ux_design}/>
      <Grade subject="Gestion de projet" rating={info.project_management}/>
    </article>
  )
};

export default StudentCard;