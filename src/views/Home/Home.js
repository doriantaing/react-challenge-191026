import React from 'react';
import Filters from "../../components/Filters";
import StudentCard from "../../components/StudentCard";
import Modal from '../../components/Modal';
import StoreContext from "../../context/StoreContext";

const Home = () => {
  return(
    <StoreContext.Consumer>
      {(context) => {
        const { allSubjects, isModalOpen, isModalEdit, filteredStudents, currentFilter} = context.data;
        if(   !filteredStudents ){
          return(
            <div className="no-results">
              <h2>No Students</h2>
            </div>
          )
        }
        console.log(context)
        return(
          <div className="container">
            <Filters currentFilter={currentFilter} filterStudents={context.filterStudents}  openModal={context.updateModal}/>
            <section className={`students ${isModalOpen ? 'modal-open' : ''}`}>
              { filteredStudents.map((item, id) => (
                <StudentCard
                  key={id}
                  info={item}
                  openModal={context.updateModal}
                />
              ))}
            </section>
            { isModalOpen && (
              <Modal
                context={context}
                allSubjects={allSubjects}
                editMode={isModalEdit}
              />
            )}
          </div>
        )
      }}
    </StoreContext.Consumer>
  )
};

export default Home;