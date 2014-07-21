angular.module('waitstaff', ['ngRoute'])
  .controller('HomeCtrl', function($scope){
  })
  .controller('NewMealCtrl', function($scope, WaitstaffData){
    $scope.data = WaitstaffData;

    $scope.wsFormSubmit = function(){
      $scope.submitted = true;
      if($scope.inputForm.$valid){
        $scope.data.createNewMeal();
      }
    };

    $scope.cancel = function(){
      $scope.submitted = false;
      $scope.data.clearInputs();
    };
  })
  .controller('MyEarningsCtrl', function($scope, WaitstaffData){
    $scope.data = WaitstaffData;
    $scope.reset = function(){
      $scope.data.clearInputs();
      $scope.data.reset();
    };
  });
