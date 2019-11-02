import React from 'react';
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="students">
        <StudentCard/>
        <StudentCard/>
        <StudentCard/>
      </section>
    </div>
  );
}

export default App;
