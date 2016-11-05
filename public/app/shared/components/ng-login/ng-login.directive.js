(function(){
	var login = function(){
		return {
			restrict: 'E',
			require: 'ngModel',
		    scope: {
		    	btnSend:'&btnSend',
		    	message:'=message',
		    	toggleAlert:'=toggleAlert',
		    },
		    templateUrl: 'app/shared/components/ng-login/ng-login.template.html',
		    link: function (scope, element, attr, ngModel) {
		    	scope.data = {};
		    	scope.toggleAlert = false;

		    	ngModel.$render = function(){
		    		scope.data 	= ngModel.$modelValue;
		    	};

		    	scope.keypress = function(event){
		    		if(event.which == 13){
		    			scope.send();
		    		}
		    	};

			    scope.send = function(){
			      	ngModel.$setViewValue(scope.data);
			      	if(scope.data.user == "" || scope.data.password == ""){
			      		scope.message = "Se necesita usuario y contraseña"
			      		scope.showAlert();
			      	}else{
			      		scope.hideAlert();
				      	scope.btnSend();
			      	}
			      	
			    };

		      	scope.showAlert = function(val){
		    		scope.toggleAlert = true;
		    	};
		    	scope.hideAlert = function(val){
		    		scope.toggleAlert = false;
		    	};

		    }
		}
	};

	angular.module('ngLogin',[])
		.directive('ngLogin',login);
})();