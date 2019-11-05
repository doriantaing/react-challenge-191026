import React from 'react';
import Filters from "../../components/Filters";
import StudentCard from "../../components/StudentCard";
import StoreContext from "../../context/StoreContext";

const Home = () => {
  return(
    <StoreContext.Consumer>
      {(context) => {
        const { allStudents } = context.data;
        return(
          <div className="container">
            <Filters/>
            <section className="students">
              { allStudents.map((item, id) => (
                <StudentCard key={id} info={item}/>
              ))}
            </section>
          </div>
        )
      }}
    </StoreContext.Consumer>
  )
};

export default Home;