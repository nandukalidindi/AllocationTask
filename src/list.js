import React, { Component } from 'react';
import Task from './task';

class List extends React.Component {
  render() {
    var taskList = [];
    for(var i=0; i<1; i++) {
      var taskName = "task" + i.toString();
      var mappedTask = this.props.mappedTasks.map(function(tasks) { return tasks[i]; });
      // var mappedTask = [];
      taskList.push(<Task taskName={taskName} mappedTask={mappedTask} />);
    }
    taskList.push(<tr> <td> HELLO </td> </tr>)
    taskList.push(<tr> <td> HELLO </td> </tr>)
    taskList.push(<tr> <td> HELLO </td> </tr>)
    taskList.push(<tr> <td> HELLO </td> </tr>)
    return (
      {taskList}
    );
  }
}

export default List;
