(function(){

var spin = function(){
		return {
			restrict: 'E',
			require: 'ngModel',
			scope: {},
		    templateUrl: 'app/shared/components/ng-spin/ng-spin.template.html',
		    link: function (scope, element, attr, ngModel) {

		    	scope.toggle = function(val){
		    		val ? element.removeClass('ng-hide') : element.addClass('ng-hide');
		    	};

		    	ngModel.$render = function(){
		    		scope.toggle(ngModel.$modelValue)
		    	};

		    	scope.$watch("model", function() {
		           scope.toggle(ngModel.$modelValue)
		        });

		    }
		}
	};

	angular.module('ngSpin',[])
		.directive('ngSpin',spin);
})();