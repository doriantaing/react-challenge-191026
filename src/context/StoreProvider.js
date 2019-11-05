import React, { Component } from 'react';
import StoreContext from './StoreContext';

class StoreProvider extends Component {
  state = {
    allStudents: []
  };

  async componentDidMount() {
    const res = await fetch('/students');

    const  json = await res.json();
    const {rows} = json;

    this.setState({
      allStudents: rows
    })
  }

  render(){
    const contextValue = {
      data: this.state,
    };

    return(
      <StoreContext.Provider value={contextValue}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default StoreProvider;