angular.module('madLibs', [])
  .controller('InputCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.data = {};
    $scope.data.genderOptions = ['male', 'female'];
    $scope.data.gender = 'male';

    $scope.data.inputs = [
      {attr: 'name', value: '', placeholder: 'Name'},
      {attr: 'dirtyTask', value: '', placeholder: 'dirty task'},
      {attr: 'obnoxiousCelebrity', value: '', placeholder: 'Obnoxious Celebrity'},
      {attr: 'jobTitle', value: null, placeholder: 'Job Title'},
      {attr: 'celebrity', value: null, placeholder: 'Celebrity'},
      {attr: 'hugeNumber', value: null, placeholder: 'huge number', type: 'number', errorMessage: 'Enter a valid number'},
      {attr: 'tediousTask', value: null, placeholder: 'tedious task'},
      {attr: 'uselessSkill', value: null, placeholder: 'useless skill'},
      {attr: 'adjective', value: null, placeholder: 'adjective'}
    ];

    $scope.generateMadLib = function(){
      if($scope.myForm.$valid){
        $scope.hideInputs = true;
        $rootScope.$broadcast('showMadlib', dataObject());
      }
    };

    var dataObject = function(){
      var dataObject = {gender: $scope.data.gender};
      for(var i=0, length=$scope.data.inputs.length; i<length; i++){
        dataObject[$scope.data.inputs[i]['attr']] = $scope.data.inputs[i]['value'];
      }
      return dataObject;
    }

    $scope.$on('startOver', function(event){
      $scope.submitted = false;
      $scope.data.gender = 'male';
      for(var i=0, length=$scope.data.inputs.length; i<length; i++){
        $scope.data.inputs[i].value = null;
      }
      $scope.hideInputs = false;
    });
  }])

  .controller('MadlibCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.data = {};

    $scope.$on('showMadlib', function(event, data){
      $scope.data = data;
      $scope.showMadlib = true;
    });

    var conversions = {'he': 'she', 'him': 'her', 'his': 'her'};
    $scope.genderize = function(pronoun){
      if ($scope.data.gender === 'male'){
        return pronoun;
      } else {
        return conversions[pronoun];
      }
    };

    $scope.startOver = function(){
      $scope.showMadlib = false;
      $rootScope.$broadcast('startOver');
    };
  }]);
