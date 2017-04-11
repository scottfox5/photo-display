var afPhoto = angular.module('afPhotoApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngTouch', 'ui.bootstrap']);
console.log("afPhotoApp connected...")
  afPhoto.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/home', {
      templateUrl: '/public/views/home.html',
      // controller: 'HomeController',
      // controllerAs: 'home',
      })
      .when('/projects', {
      templateUrl: '/public/views/projects.html',
      // controller: 'ProjController',
      // controllerAs: 'proj',
      })
      .when('/whiteshow', {
      templateUrl: '/public/views/whiteshow.html',
      controller: 'WhiteShowController',
      controllerAs: 'white',
      })
      .otherwise({
        redirectTo: '/home',
      });
  },


]);
