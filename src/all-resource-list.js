import React, { Component } from 'react';
import ResourceTaskConsolidation from './resource-task-consolidation';

class AllResourceList extends React.Component {
  render() {
    var resourceTaskMap = this.props.resourceTaskMap;
    var headers = [];
    this.props.dateRange.forEach(function(date) {
      headers.push(<td> {date.toUTCString().split("00:00:00 ")[0]} </td>);
    });
    var allResources = [];
    Object.keys(resourceTaskMap).forEach(function(resource) {
      allResources.push(<ResourceTaskConsolidation resourceTaskMap={resourceTaskMap} resourceName={resource} />);
    });
    return (
      <table style={{'width': '100%'}}>
        <thead>
          <tr className="date-row">
            &nbsp; {headers}
          </tr>
        </thead>
        {allResources}
      </table>
    );
  }
}

export default AllResourceList;
