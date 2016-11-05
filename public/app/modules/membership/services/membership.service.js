(function(){
	angular.module('membership').factory('Membership',function($resource, $singleton){
		var path = $singleton.path;
		return $resource(path+'test/:id');
	});
	angular.module('membership').factory('Login',function($resource, $singleton){
		var path = $singleton.path;
		return $resource(path+'login/:id');
	});
})();