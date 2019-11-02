import React from 'react';

const Grade = ({subject, rating}) => {
  return(
    <div className={`grade ${rating}-color`}>
      <div className="grade-content">
        <h2>{subject}</h2>
        <p>{rating}</p>
      </div>
    </div>
  )
};

export default Grade;