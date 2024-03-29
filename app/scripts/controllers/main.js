'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
 angular.module('mytodoApp')
 .controller('MainCtrl', function ($scope, localStorageService) {
  var todosInStore = localStorageService.get('todos');

  $scope.todos = todosInStore && todosInStore.split('\n') || [];
  console.log(todosInStore);
  $scope.$watch('todos', function () {
    localStorageService.add('todos', $scope.todos.join('\n'));
  }, true);

  $scope.addTodo = function () {
    $scope.todos.push($scope.todo);
    $scope.todo = '';
  };
  $scope.removeTodo = function (index) {
    console.log(index);
    $scope.todos.splice(index, 1);
  };
});
