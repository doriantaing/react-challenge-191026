import React, { Component } from 'react';
import StoreContext from './StoreContext';
import Api from "../helpers/Api";

class StoreProvider extends Component {
  state = {
    allStudents: [],
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

    this.setState({
      allStudents: rows
    })
  }

  updateModal = (editMode, studentID) => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      isModalEdit: editMode,
      studentID
    }))

    this.resetForm();
  };

  sendForm = async(e) => {
    e.preventDefault();
    const { addStudentInfo } = this.state;

    // Create new student
    await Api.createStudent(addStudentInfo).then(() => {
      this.getAllStudents()
    });
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

    this.setState({
      addStudentInfo: {
        last_name: data.last_name,
        first_name: data.first_name,
        email: data.email,
        description: data.description
      }
    })
  };

  deleteStudent = async(studentID) => {
    await Api.deleteStudent(studentID).then(() => {
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
      deleteStudent: this.deleteStudent
    };

    return(
      <StoreContext.Provider value={contextValue}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default StoreProvider;