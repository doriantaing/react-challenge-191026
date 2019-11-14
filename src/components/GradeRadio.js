import React from 'react';

const GradeRadio = ({subject, last, eventChange}) => {
  let inputName;
  const error = [
    {
      color: 'color-green',
      grade: 'A'
    },
    {
      color: 'color-mediumGreen',
      grade: 'B'
    },
    {
      color: 'color-lightGreen',
      grade: 'C'
    },
    {
      color: 'color-lighterGreen',
      grade: 'D'
    },
    {
      color: 'color-greenYellow',
      grade: 'E'
    },
    {
      color: 'color-yellow',
      grade: 'F'
    },
  ];

  switch(subject) {
    case 'Programmation côté client':
      inputName = 'client_side_programming';
      break;
    case 'Programmation côté serveur':
      inputName = 'back_side_programming';
      break;
    case 'Design UI':
      inputName = 'ui_design';
      break;
    case 'Design UX':
      inputName = 'ux_design';
      break;
    case 'Gestion de projet':
      inputName = 'project_management';
      break;
    default :
      inputName = '';
      break;
  }

  return(
    <div className={`gradeRadio ${last ? 'last' : ''}`}>
      <h3 className="gradeRadio-title">{subject}</h3>
      <div className="gradeRadio-inputs">
        { error.map((item, id) => (
          <div className={`gradeRadio-input ${item.color}`} key={id}>
            <input type="radio" name={inputName} required onChange={eventChange}/>
            <label>{item.grade}</label>
          </div>
        ))}
      </div>
    </div>
  )
};

export default GradeRadio;