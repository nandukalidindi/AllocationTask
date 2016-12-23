import React, { Component } from 'react';
import Task from './task'

class ResourceTaskConsolidation extends React.Component {
  render() {
    var resourceTaskMap = this.props.resourceTaskMap,
        relevantTaskList = resourceTaskMap[this.props.resourceName],
        cells = [];
    relevantTaskList.forEach(function(taskList) {
      var count = taskList.filter(function(task) { return task === 4; }).length*4;
      cells.push(<td> {count} </td>);
    });

    var list = [];
    for(var i=0; i<6; i++) {
      if(relevantTaskList.map(function(task) { return task[i] !== 0 ; }).indexOf(true) !== -1) {
        list.push(<Task index={i} resourceList={relevantTaskList}/>)
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
