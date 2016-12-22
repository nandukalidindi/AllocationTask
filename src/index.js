import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Cell from './cell';
import Table from './table';

Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push( new Date (currentDate) )
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

var data = [
  {"task": "task1", "resource": ["john", "jimmy"], "start": "2015-08-25", "end": "2015-09-25", "utilization": 50},
  {"task": "task2", "resource": ["john", "jimmy"], "start": "2015-09-21", "end": "2015-09-30", "utilization": 50},
  {"task": "task3", "resource": ["john"], "start": "2015-08-26", "end": "2015-09-02", "utilization": 50},
  {"task": "task4", "resource": ["sara"], "start": "2015-09-14", "end": "2015-10-02", "utilization": 100},
  {"task": "task5", "resource": ["hg", "hb"], "start": "2015-09-10", "end": "2015-10-14", "utilization": 50},
  {"task": "task6", "resource": ["hg"], "start": "2015-09-10", "end": "2015-09-21", "utilization": 50}
]

function processData(data) {
  return data.map(function(task) {
    task["start"] = new Date(task["start"]);
    task["end"] = new Date(task["end"]);
    return task;
  });
}

function getDateRanges(data) {
  var minStartDate = new Date("2016-01-01"), maxEndDate = new Date("2014-01-01");
  data.forEach(function(task) {
      if(task["start"] < minStartDate) {
        minStartDate = task["start"];
      }
      if(task["end"] > maxEndDate) {
        maxEndDate = task["end"];
      }
  });
  return [minStartDate, maxEndDate];
}

// getDateRanges(processData(data))

function isDateInBetween(date, beforeDate, afterDate) {
  return (beforeDate <= date && afterDate >= date);
}

function getDataForDate(date, data) {
  var hash = {};
  data.forEach(function(task) {
    if(isDateInBetween(date, task["start"], task["end"])) {
      task["resource"].forEach(function(resource) {
        hash[resource] = hash[resource] || [];
        hash[resource].push(task["task"]);
      });
    }
  });
  return hash
}

function resources(data) {
  var finalResources = []
  data.forEach(function(task) {
    task["resource"].forEach(function(resource) {
      if(finalResources.indexOf(resource) === -1) {
        finalResources.push(resource);
      }
    });
  });
  return finalResources;
}

function populateNameTaskData(dateRanges, data) {
  var finalHash = {};
  dateRanges.forEach(function(date) {
    var hash = {};
    data.forEach(function(task) {
      resources(data).forEach(function(resource) {
        hash[resource] = hash[resource] || [];
        hash[resource].push((isDateInBetween(date, task["start"], task["end"]) && task["resource"].indexOf(resource) !== -1) ? 4 : 0);
      });
    });
    Object.keys(hash).forEach(function(resource) {
      finalHash[resource] = finalHash[resource] || [];
      finalHash[resource].push(hash[resource]);
    });
  });
  return finalHash;
}

function getIndividialTask(resource, task_index, finalHash) {
  return finalHash[resource].map(function(tasks) {
    return tasks[task_index];
  });
}

function printMe() { return 'HELO'; }

// getDataForDate(new Date("2015-08-25"), processData(data))
var dates = getDateRanges(processData(data));
// getDates(dates[0], dates[1]);
var finalHash = populateNameTaskData(getDates(dates[0], dates[1]), processData(data));
// getIndividialTask("john", "task3", populateNameTaskData(getDates(dates[0], dates[1]), processData(data)))
var resources = resources(processData(data));

var newData = finalHash['john'];


var data = [
  {id: 1, taskName: "Pete Hunt", standarDescription: "This is one comment", emplComment: "meaaow I am meeawo", empRating : "1"},
  {id: 2, taskName: "Pete Hunt", standarDescription: "This is one comment", emplComment: "meaaow I am meeawo", empRating : "1"},
  {id: 3, taskName: "Pete Hunt", standarDescription: "This is one comment", emplComment: "meaaow I am meeawo", empRating : "1"},
  {id: 4, taskName: "Pete Hunt", standarDescription: "This is one comment", emplComment: "meaaow I am meeawo", empRating : "1"},
  {id: 5, taskName: "Pete Hunt", standarDescription: "This is one comment", emplComment: "meaaow I am meeawo", empRating : "1"}
];

  var AllResourceList = React.createClass({
    render: function() {
      var headers = [];
      getDates(dates[0], dates[1]).forEach(function(date) {
        headers.push(<td> {date.toString().split("20:00:00 ")[0]} </td>);
      });
      var allResources = [];
      var resourceList = ["john", "jimmy"];
      Object.keys(finalHash).forEach(function(resource) {
        allResources.push(<ResourceTaskMap resourceName={resource} />);
      });
      return (
       <div className="downloadlinks">
        <table className="table table-bordered table-striped-col nomargin" id="table-data">
        <thead>
          <tr>
              {headers}
          </tr>
          </thead>
          {allResources}
        </table>
        </div>
      );
    }
  });

var ResourceTaskList = React.createClass({
  render: function() {
    var relevantTaskList = finalHash[this.props.resourceName];
    var list = [];
    for(var i=0; i<6; i++) {
      list.push(<tr> <ResourceTask index={i} resourceList={relevantTaskList}/> </tr>);
    }
    return (
      <div>
        {list}
      </div>
    );
  }
});

var ResourceTask = React.createClass({
  render: function() {
    var index = this.props.index;
    var taskListByIndex = this.props.resourceList.map(function(task) { return task[index];});
    var cells = [];
    taskListByIndex.forEach(function(task) {
      cells.push(<td> {task} </td>);
    });
    var taskName = "task" + this.props.index.toString();
    return (
      <tr>
        <td> {taskName} </td>
        {cells}
      </tr>
    );
  }
});


var ResourceTaskMap = React.createClass({
  render: function() {
    var relevantTaskList = finalHash[this.props.resourceName];
    var cells = [];
    relevantTaskList.forEach(function(taskList) {
      var count = taskList.filter(function(task) { return task == 4; }).length*4;
      cells.push(<td> {count} </td>);
    })
    return (
      <div>
        <tr>
          <td> {this.props.resourceName} </td>
          {cells}
        </tr>
        <ResourceTaskList resourceName={this.props.resourceName} />
      </div>
    );
  }
});

ReactDOM.render(<div><AllResourceList data={data}  /></div>, document.getElementById('root'));
