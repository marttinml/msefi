/*global angular*/
(function () {

    var router = function ($routeProvider) {

        
        var baseUrl = 'app/modules/';


        // Login
        $routeProvider.when('/', {
            templateUrl: baseUrl + 'membership/views/membership.view.html',
            controller: 'MembershipController'
        });

        // Home
        $routeProvider.when('/home', {
            templateUrl: baseUrl + 'home/views/home.view.html',
            controller: 'HomeController'
        });

    };

    router.$inject = ['$routeProvider'];
    angular.module('app').config(router);

})();