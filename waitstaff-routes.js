angular.module('waitstaff')
.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl'
  }).when('/new-meal',{
    templateUrl: 'new-meal.html',
    controller: 'NewMealCtrl'
  }).when('/my-earnings',{
    templateUrl: 'my-earnings.html',
    controller: 'MyEarningsCtrl'
  }).otherwise({
    redirectTo: '/'
  });
});
