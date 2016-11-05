/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams) {
        //code

        $rootScope.quickMenu = [
            {
                title:"Inicio",
                icoClass : "fa-home",
                url:"#/home",
                active:false
            },
            {
                title:"Tiempo aire",
                icoClass : "fa-phone",
                url:"#/tiempoaire",
                active:false
            },
            {
                title:"Mensajes",
                icoClass : "fa-inbox",
                url:"#/inbox",
                count:5,
                active:false
            },
            {
                title:"Perfil",
                icoClass : "fa-user",
                url:"#/profile",
                active:false
            },
            {
                title:"Ayuda",
                icoClass : "fa-cog",
                url:"#/help",
                active:false
            } 
        ];
        $rootScope.setIndexQuickMenuActive = function(index){
        	for(i in $rootScope.quickMenu){
        		$rootScope.quickMenu[i].active = false;
        	}
        	$rootScope.quickMenu[index].active = true;
        };
        
    };
    controller.$inject = ['$scope', '$rootScope', '$routeParams'];
    angular.module('app').controller('AppController', controller);

})();