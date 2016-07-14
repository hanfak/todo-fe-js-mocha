var expect = require('chai').expect;
var assert = require('chai').assert;

var Task = require('../../src/Task');

describe('Task', function(){

  beforeEach(function(){
    task = new Task('Buy Milk');
  });

  it('can instantiate a to-do object',function(){
    expect(task).to.be.an.instanceof(Task);
  });

  it('is false by default', function(){
    expect(task.completed()).to.eql(false);
  });

  it('has a name', function(){
    expect(task.name()).to.eql('Buy Milk');
  });

  // It completes the task
  it('complete a task', function(){
    task.complete();
    expect(task.completed()).to.eql(true);
  });
  // It uncompletes the task
});
