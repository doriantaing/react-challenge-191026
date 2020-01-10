import React, { Component, Fragment } from 'react';
import Header from "../../components/Header";
import Register from "./Register";
import Api from '../../helpers/Api';

class RegisterContainer extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };

  onChangeInput = (e) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    
    this.setState({
      [name]: value
    })
  };

  submitForm = async(e) => {
    e.preventDefault();

    const teacher = await Api.createTeacher(this.state);
    console.log(teacher);
  };

  render(){
    return (
      <Fragment>
        <Header/>
        <Register
          state={this.state}
          changeInputValue={this.onChangeInput}
          submitForm={this.submitForm}
        />
      </Fragment>
    )
  }
}

export default RegisterContainer;