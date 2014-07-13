angular.module('waitstaff', [])
  .controller('MainCtrl', ['$scope', function($scope){
    var initializeData = function(){
      $scope.data = {
        customerSubtotal: 0,
        customerTip: 0,
        customerTotal: 0,
        tipHistory: []
      };
    };
    initializeData();

    var customerTotal = function(customerSubtotal, customerTip){
      return customerSubtotal + customerTip;
    };

    var customerSubtotal = function(baseMealPrice, taxRate){
      var subTot = parseFloat(baseMealPrice);
      subTot = subTot + subTot * taxRate / 100; 
      return subTot;
    };

    var calculateTip = function(customerSubtotal, tipPercent){
      return tipPercent / 100 * customerSubtotal;
    }

    $scope.myTipTotal = function(){
      var total = 0;
      for(var i=0, l=$scope.data.tipHistory.length; i<l; i++){
        total += $scope.data.tipHistory[i];
      }
      return total;
    };

    $scope.avgTip = function(){
      if($scope.data.tipHistory.length){
        return $scope.myTipTotal() / $scope.data.tipHistory.length;
      }else{
        return 0;
      }
    };

    $scope.wsFormSubmit = function(){
      $scope.submitted = true;
      if($scope.inputForm.$valid){
        $scope.data.customerSubtotal = customerSubtotal($scope.data.baseMealPrice, $scope.data.taxRate);
        $scope.data.customerTip = calculateTip($scope.data.customerSubtotal, $scope.data.tipPercent);
        $scope.data.customerTotal = customerTotal($scope.data.customerSubtotal, $scope.data.customerTip);
        $scope.data.tipHistory.push($scope.data.customerTip)
      }
    };

    var clearForm = function(){
      $scope.submitted = false;
      $scope.data.baseMealPrice = null;
      $scope.data.taxRate = null;
      $scope.data.tipPercent = null;
    };

    $scope.cancel = function(){
      clearForm();
    };

    $scope.reset = function(){
      clearForm();
      initializeData();
    };
  }]);
