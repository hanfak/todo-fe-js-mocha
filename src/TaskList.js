var Task = require('./task');

function TaskList(){
  this._list = [];
}

TaskList.prototype.showTasks = function(){
  return this._list;
};

TaskList.prototype.storeTask = function(taskName){
  newTask = new Task(taskName);
  this._list.push(newTask);
};

TaskList.prototype.completeTask = function(task){
  task.complete();
};


module.exports = TaskList;
