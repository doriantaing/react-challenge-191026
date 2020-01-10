import React, { Component, Fragment } from 'react';
import Header from "../../components/Header";
import Register from "./Register";

class RegisterContainer extends Component {
  render(){
    return (
      <Fragment>
        <Header/>
        <Register />
      </Fragment>
    )
  }
}

export default RegisterContainer;