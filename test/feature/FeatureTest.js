
var expect = require('chai').expect;
var TaskList = require('../../src/TaskList');
var Task = require('../../src/Task');

describe('TaskList app', function(){

  beforeEach(function(){
    my_tasks = new TaskList();
    buy_milk = new Task('Buy milk');
    go_gym = new Task('Go to gym');
  });

  // As a user
  // So that I can check what I have to do
  // I would like to retrieve the task from the list
  it('stores and retreives tasks', function(){
    list = my_tasks.showTasks();
    expect(list).to.eql([]);
  });

  // As a user
  // so that I can use the list
  // I would like to create a task
  it('stores and retreives tasks', function(){
    my_tasks.storeTask('Buy milk');
    my_tasks.storeTask('Go to gym');
    expect(my_tasks.showTasks()).to.eql([buy_milk, go_gym]);
  });

  // As a user
  // So that I can log a completed task
  // I would like to change the status of the task to completed
  it('change the status of a task', function(){
    my_tasks.storeTask('Buy milk');
    expect(my_tasks.showTasks()[0]).to.include({_name: 'Buy milk', _completed: false});
    task = my_tasks.showTasks()[0];
    my_tasks.completeTask(task);
    expect(my_tasks.showTasks()[0]).to.include({_name: 'Buy milk', _completed: true});
  });
});


// I would like to view a task

// I would like to add a task to the list

// I would like to store a task
//
// I would like to retrieve the task from the list

// I would like to change the status of the task to completed
//
// I would like to check the status
