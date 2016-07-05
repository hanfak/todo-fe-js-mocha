function Task(name){
  this._name = name;
  this._completed = false;
}

// Task.prototype = {
//   completed: function(){
//     return this._completed;
//   },
//
//   name: function(){
//     return this._name;
//   }
//  };

 Task.prototype.completed = function(){
   return this._completed;
 };

 Task.prototype.name = function(){
   return this._name;
 };

 Task.prototype.complete = function(){
  this._completed = true;
 };

module.exports = Task;
