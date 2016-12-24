import React from 'react';
import Task from './task'

class ResourceTaskConsolidation extends React.Component {
  render() {
    var resourceTaskMap = this.props.resourceTaskMap,
        relevantTaskList = resourceTaskMap[this.props.resourceName],
        cells = [];
    relevantTaskList.forEach(function(taskList, index) {
      var count = taskList.reduce((a, b) => a + b, 0);
      cells.push(<td key={index}>
                  {count}
                 </td>);
    });

    var list = [];
    for(var i=0; i<6; i++) {
      if(relevantTaskList.map(function(task) { return task[i] !== 0; }).indexOf(true) !== -1) {
        list.push(<Task key={i} index={i}
                   resourceList={relevantTaskList}/>)
      }
    }
    return (
      <tbody>
        <tr className="yellow-cell">
          <td> {this.props.resourceName} </td>
          {cells}
        </tr>
        {list}
      </tbody>
    );
  }
}

export default ResourceTaskConsolidation;
