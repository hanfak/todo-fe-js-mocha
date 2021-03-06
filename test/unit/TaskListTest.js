var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require("sinon");

var TaskList = require('../../src/TaskList');

describe('TaskList', function(){
  var taskSpy;
  var object;
  var taskSpyComplete;
  var buy_milk;
  var go_gym;

  beforeEach(function(){
    my_tasks = new TaskList();
    taskSpy = sinon.spy();
    object = { complete: function () {} };
    taskSpyComplete = sinon.spy(object, 'complete');
    buy_milk = {_name: 'Buy milk', _completed: false};
    go_gym = {_name: 'Go to gym', _completed: false};
  });

  it('can instantiate a to-do object',function(){
    expect(my_tasks).to.be.an.instanceof(TaskList);
  });

  describe('list a tasks', function(){
    it('is empty by default', function(){
      expect(my_tasks.showTasks()).to.be.empty;
    });

    //list a tasksd

  });

  describe('store a task', function(){
    it('can create and store a task', function(){
      my_tasks.storeTask('Buy milk');
      expect(my_tasks.showTasks()[0].name()).to.eql(buy_milk._name);
    });

    it('can store a new task in a task object', function() {
      my_tasks.storeTask('Buy milk');
      expect(taskSpy).to.have.been.calledWithNew;
    });

    it('can store a new task ', function() {
      my_tasks.storeTask('Buy milk');
      expect(my_tasks.showTasks()[0]._name).to.include("Buy milk");
    });

    it('store task, list not empty', function(){
      my_tasks.storeTask('Buy milk');
      expect(my_tasks.showTasks().length).to.eql(1);
    });

    it('can create and store multiple tasks', function(){
      my_tasks.storeTask('Buy milk');
      my_tasks.storeTask('Go to gym');
      expect(my_tasks.showTasks()[1].name()).to.eql(go_gym._name);
    });

    // How to mock Task object and return
    // Test object created in method equals mock
  });


  describe('completing a task', function(){
    // how to mock method for object
    it('returns true', function(){
      my_tasks.completeTask(buy_milk);
      expect(taskSpyComplete).to.have.been.calledWith(buy_milk);

    });

    //list a tasks

  });

});
