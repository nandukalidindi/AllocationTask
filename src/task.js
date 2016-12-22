import React, { Component } from 'react';

class Task extends React.Component {
  render() {
    var cells = [];
    this.props.mappedTask.forEach(function(task) {
      cells.push(<td> {task} </td>);
    });
    return (
      <tr>
        <td> {this.props.taskName} </td>
        {cells}
      </tr>
    );
  }
}

export default Task;
