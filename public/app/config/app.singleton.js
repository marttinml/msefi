(function(){
	var factory = function(){
        //return { path: 'http://localhost:2000/v0/'};
        return { path: 'https://floating-crag-84944.herokuapp.com/v0/'};
	};
	angular.module('app').factory('$singleton',factory);
})();