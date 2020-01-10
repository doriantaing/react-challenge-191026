import React, { Component } from 'react';
import StoreContext from './StoreContext';
import Api from "../helpers/Api";

class StoreProvider extends Component {


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