import React from 'react';

class Task extends React.Component {
  render() {
    var index = this.props.index;
    var taskListByIndex = this.props.resourceList.map(function(task) { return task[index];});
    var cells = [];
    taskListByIndex.forEach(function(task, index) {
      cells.push(<td key={index}>
                   {task}
                  </td>);
    });
    var taskName = "task" + (this.props.index + 1).toString();
    return (
      <tr className="cyan-cell">
        <td> {taskName} </td>
        {cells}
      </tr>
    );
  }
}

export default Task;
