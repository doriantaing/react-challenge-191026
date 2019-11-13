import React , { useEffect } from 'react';
import { ReactComponent as CloseIcon } from '../assets/img/close.svg';
import GradeRadio from "./GradeRadio";

const Modal = ({context, allSubjects, editMode}) => {
  const { updateModal, sendForm, inputOnChange } = context;
  const { studentID } = context.data;
  const title = editMode ? 'Éditer un élève' : 'Ajouter un élève';

  useEffect(() => {
    if( editMode ) {
      context.fetchStudent(studentID);
    }
  }, [editMode, studentID, context]);

  return(
    <div className="modal">
      <div className="modal-container">
        <CloseIcon className="modal-close" onClick={() => updateModal(false)}/>
        <h2 className="modal-title">{title}</h2>

        <form className="modal-form" onSubmit={sendForm}>
          <div className="modal-form_top">
            <input type="text" className="modal-inputText two-col" value={context.data.addStudentInfo.last_name} placeholder="Nom" name="last_name" required onChange={inputOnChange}/>
            <input type="text" className="modal-inputText two-col" value={context.data.addStudentInfo.first_name} placeholder="Prénom" name="first_name" required onChange={inputOnChange}/>
          </div>
          <input type="email" className="modal-inputText" value={context.data.addStudentInfo.email} placeholder="Adresse e-mail" name="email" required onChange={inputOnChange}/>
          <textarea className="modal-textarea" placeholder="Bio" value={context.data.addStudentInfo.description} name="description" onChange={inputOnChange}/>
          { allSubjects.map((subject, i) => (
            <GradeRadio subject={subject} key={i} last={i === allSubjects.length - 1} eventChange={inputOnChange}/>
          ))}
          <div className={`modal-actions ${editMode && 'edit-active'}`}>
            { editMode && (
              <button className="btn btn-red" onClick={() => context.deleteStudent(studentID)}>Supprimer l'élève</button>
            )}
            <input type="submit" className="btn btn-green" value="Valider"/>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Modal;