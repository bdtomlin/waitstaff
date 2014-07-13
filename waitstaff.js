angular.module('waitstaff', [])
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.data = {
      customerSubtotal: 0,
      customerTip: 0,
      mealCount: 0,
      avgTip: 0,
      myTipTotal: 0,
      tipHistory: []
    };

    var customerTotal = function(){
      return $scope.data.customerSubtotal + $scope.data.customerTip;
    };

    var avgTip = function(){
      return $scope.data.myTipTotal / $scope.data.tipHistory.length;
    };

    var customerSubtotal = function(){
      var subTot = parseFloat($scope.data.baseMealPrice);
      subTot = subTot + subTot * $scope.data.taxRate / 100; 
      return subTot;
    };

    var myTipTotal = function(){
      var total = 0;
      for(var i=0, l=$scope.data.tipHistory.length; i<l; i++){
        total += $scope.data.tipHistory[i];
      }
      return total;
    };


    $scope.wsFormSubmit = function(){
      if($scope.inputForm.$valid){
        $scope.data.customerSubtotal = customerSubtotal();
        $scope.data.customerTotal = customerTotal();
        $scope.data.customerTip = $scope.data.tipPercent / 100 * $scope.data.customerSubtotal;
        $scope.data.customerTotal = customerTotal();
        $scope.data.tipHistory.push($scope.data.customerTip)
        $scope.data.myTipTotal = myTipTotal();
        $scope.data.avgTip = avgTip();
      }
    };

  }]);
