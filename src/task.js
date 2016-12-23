import React, { Component } from 'react';

class Task extends React.Component {
  render() {
    var index = this.props.index;
    var taskListByIndex = this.props.resourceList.map(function(task) { return task[index];});
    var cells = [];
    taskListByIndex.forEach(function(task) {
      cells.push(<td> {task} </td>);
    });
    var taskName = "task" + this.props.index.toString();
    return (
      <tr className="cyan-cell">
        <td> {taskName} </td>
        {cells}
      </tr>
    );
  }
}

export default Task;
