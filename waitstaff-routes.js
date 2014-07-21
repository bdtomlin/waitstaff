angular.module('waitstaff')
.run(function($rootScope, $location, $timeout){
  $rootScope.$on('$routeChangeError', function(){
    $location.path("/error");
  });
  $rootScope.$on('$routeChangeStart', function(){
    $rootScope.isLoading = true;
  });
  $rootScope.$on('$routeChangeSuccess', function(){
    $timeout(function(){
      $rootScope.isLoading = false;
    }, 1000);
  });
})
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
  }).when('/error',{
    templateUrl: 'error.html'
  }).otherwise({
    redirectTo: '/'
  });
});
