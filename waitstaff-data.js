angular.module('waitstaff').
factory('WaitstaffData', function(){
  return {
    customerSubtotal: 0,
    customerTip: 0,
    customerTotal: 0,
    tipHistory: [],
    clearInputs: function(){
      this.baseMealPrice = null;
      this.taxRate = null;
      this.tipPercent = null;
    },
    reset: function(){
      this.customerSubtotal = 0
      this.customerTip = 0
      this.customerTotal = 0
      this.tipHistory = []
    },
    myTipTotal: function(){
      var total = 0;
      for(var i=0, l=this.tipHistory.length; i<l; i++){
        total += this.tipHistory[i];
      }
      return total;
    },
    avgTip: function(){
      if(this.tipHistory.length){
        return this.myTipTotal() / this.tipHistory.length;
      }else{
        return 0;
      }
    },
    calculateCustomerSubtotal: function(){
      var subTot = parseFloat(this.baseMealPrice);
      subTot = subTot + subTot * this.taxRate / 100; 
      return subTot;
    },
    calculateCustomerTotal: function(){
      return this.customerSubtotal + this.customerTip;
    },
    calculateTip: function(){
      return this.tipPercent / 100 * this.customerSubtotal;
    },
    createNewMeal: function(){
      this.customerSubtotal = this.calculateCustomerSubtotal();
      this.customerTip = this.calculateTip();
      this.customerTotal = this.calculateCustomerTotal();
      this.tipHistory.push(this.customerTip)
    }
  };
});
