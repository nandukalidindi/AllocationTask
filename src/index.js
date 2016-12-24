import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AllResourceList from './all-resource-list'

function addDaysToDate(currentDate, numberOfDays) {
    var date = new Date(currentDate.valueOf())
    date.setDate(date.getDate() + numberOfDays);
    return date;
}

function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate))
        currentDate = addDaysToDate(currentDate, 1);
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

function processedData(data) {
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

function isDateInBetween(date, beforeDate, afterDate) {
  return (beforeDate <= date && afterDate >= date);
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
  var resourceTaskMap = {};
  dateRanges.forEach(function(date) {
    var hash = {};
    data.forEach(function(task) {
      resources(data).forEach(function(resource) {
        hash[resource] = hash[resource] || [];
        hash[resource].push((isDateInBetween(date, task["start"], task["end"]) && task["resource"].indexOf(resource) !== -1) ? 8*(task["utilization"]/100) : 0);
      });
    });
    Object.keys(hash).forEach(function(resource) {
      resourceTaskMap[resource] = resourceTaskMap[resource] || [];
      resourceTaskMap[resource].push(hash[resource]);
    });
  });
  return resourceTaskMap;
}

data = processedData(data);
var dates = getDateRanges(data);
var resourceTaskMap = populateNameTaskData(getDates(dates[0], dates[1]), data);

ReactDOM.render(
  <div>
    <AllResourceList dateRange={getDates(dates[0], dates[1])} resourceTaskMap={resourceTaskMap} />
  </div>,
  document.getElementById('root')
);
