import React, { Component } from 'react';

class Cell extends React.Component {
  render() {
    var cell = "";
    console.log(this.props.name);
    console.log("WHAT IS THIS VALUE: " + this.props.name !== null);
    if(this.props.name) {
      cell = this.props.name;
    } else {
      cell = this.props.utilization ? 4 : 0;
    }
    return (
      <h1> {cell} </h1>
    );
  }
}

export default Cell;
