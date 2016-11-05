/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams, Login) {
        //code
        // $scope.homeList = [];
        // $scope.get = function(){
        //     var home = new Home();
        //     home.$get({id:$scope.id}).then(function(home){
        //         console.log(home);
        //     },function(e){
        //         console.log(e);
        //     });
        // };
        // $scope.getAll = function(){
        //     $scope.homeList = Home.getAll(function(){
        //         console.log($scope.homeList);
        //     });
        // };
        // $scope.save = function(){
        //     var home = new Home();
        //     home.title = $scope.title;
        //     home.description = $scope.description;
        //     home.$save().then(function(home){
        //         console.log(home);
        //         $scope.homeList.push(home);
        //     },function(e){
        //         console.log(e);
        //     });
        // };
        // $scope.update = function(){
        //     var home = new Home();
        //     home.title = $scope.title;
        //     home.description = $scope.description;
        //     home.$update({id:$scope.id}).then(function(home){
        //         $scope.homeList = [];
        //         $scope.homeList.push(home);
        //     },function(e){
        //         console.log(e);
        //     });
        // };
        // $scope.delete = function(){
        //     var home = new Home();
        //     home.DOMID =15;
        //     home.$delete({id:$scope.id} ).then(function(home){
        //         console.log(data);
        //         $scope.homeList = [];
        //         $scope.homeList.push(home);
        //     },function(e){
        //         console.log(e);
        //     });
        // };

        $scope.data = {
            user: '',
            password: ''
        };
        $scope.spin = false;
        $scope.toggleAlert = true;

        $scope.login = function(){

            $scope.spin = true;
            $serviceLogin.login($scope.data)
                .then(function(data) {
                    $scope.spin = false;
                    if(data.success){
                         $rootScope.enter(data.data);
                    }else{
                        $scope.toggleAlert = true;
                        $scope.message = data.description;
                    }
                    
                }, function(error) {
                    console.log(error);
                });
        };

        $scope.login = function(){
            $scope.spin = true;
            var login = new Login();
            login.user = $scope.data.user;
            login.pass = $scope.data.password;
            login.$save().then(function(data){
                if(data.status.active){
                         $rootScope.enter(data);
                }else{
                    $scope.toggleAlert = true;
                    $scope.message = data.status.description;
                }
            },function(e){
                console.log(e);
            });
        };

        $rootScope.enter = function(data){
            $scope.user        = data;
            $scope.name         = data.name;
            $rootScope.signed   = true;
            window.location = "#/home";
        };
    };
    controller.$inject = ['$scope','$rootScope','$routeParams','Login'];
    angular.module('membership').controller('MembershipController', controller);

})();