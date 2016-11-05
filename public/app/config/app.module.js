/*global angular*/
(function () {

    var angularModules      = ["ngRoute","ngTouch","ngResource"];
    var customModules       = ["home","membership"];
    var componentsModules   = ["ngLogin","ngSpin"];

    var modules = angularModules.concat(customModules,componentsModules);
    angular.module('app', modules);

})();