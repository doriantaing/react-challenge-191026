import React, { Component } from 'react';
import StoreContext from './StoreContext';
import Api from "../helpers/Api";

class StoreProvider extends Component {
  state = {
      currentFilter : 'all',
    allStudents: [],
      filteredStudents : [],
    allSubjects: ['Programmation côté client', 'Programmation côté serveur', 'Design UI', 'Design UX', 'Gestion de projet'],
    isModalOpen: false,
    isModalEdit: false,
    studentID: '',
    addStudentInfo: {
      last_name: '',
      first_name: '',
      email: '',
      description: '',
    }
  };

  async componentDidMount() {
    const rows = await Api.getAllStudents();
    console.log(rows)
    this.setState({
      allStudents: rows,
        filteredStudents: rows,
    })
  }

  updateModal = (editMode, studentID) => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      isModalEdit: editMode,
      studentID
    }))


    if(editMode){
      this.fetchStudent(studentID).then(() => {
        console.log('FETCHED STUDENT');
      });
    }
    this.resetForm();
  };

  filterStudents = (category) => {
      if (category === 'all'){
          this.setState(prevState => {

              return { currentFilter: category, filteredStudents: prevState.allStudents}
          });
          return;
      }
    const students = this.state.allStudents.filter(student =>
      student[category] === 'A' || student[category] === 'B');
    this.setState(prevState => {
          return { currentFilter: category, filteredStudents : students}
      })
  };

  sendForm = async(e, editMode) => {
    e.preventDefault();
    const { addStudentInfo, studentID } = this.state;

    if(editMode){
      // Edit student
      await Api.editStudent(studentID, addStudentInfo).then(async() => {
        await this.getAllStudents()
      })
    } else {
      // Create new student
      await Api.createStudent(addStudentInfo).then(async() => {
        await this.getAllStudents()
      });
    }
  };

  inputOnChange = (e) => {
    const inputValue = e.target.type === 'radio' ? e.target.nextSibling.textContent : e.target.value;
    const inputName = e.target.name;
    const studentInfo = {
      [inputName]: inputValue
    };

    this.setState(prevState => ({
      addStudentInfo: Object.assign(prevState.addStudentInfo, studentInfo)
    }));
  };

  resetForm = () => {
    this.setState({
      addStudentInfo: {
        last_name: '',
        first_name: '',
        email: '',
        description: '',
      }
    })
  };

  getAllStudents = async() => {
    const refreshData = await Api.getAllStudents();

    this.setState({
      allStudents: refreshData,
      isModalOpen: false,
    });

    this.resetForm();
  };

  fetchStudent = async(studentID) => {
    const data = await Api.getStudent(studentID);
    const {
      last_name,
      first_name,
      email,
      description,
      client_side_programming,
      back_side_programming,
      ui_design,
      ux_design,
      project_management
    } = data;

    this.setState({
      addStudentInfo: {
        last_name,
        first_name,
        email,
        description,
        client_side_programming,
        back_side_programming,
        ui_design,
        ux_design,
        project_management
      },
    })
  };

  deleteStudent = async(e, studentID) => {
    e.preventDefault();

    await Api.deleteStudent(studentID).then((e) => {
      this.getAllStudents()
    })
  };

  render(){
    const contextValue = {
      data: this.state,
      updateModal: this.updateModal,
      sendForm: this.sendForm,
      inputOnChange: this.inputOnChange,
      fetchStudent: this.fetchStudent,
      deleteStudent: this.deleteStudent,
        filterStudents : this.filterStudents,
    };

    return(
      <StoreContext.Provider value={contextValue}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default StoreProvider;