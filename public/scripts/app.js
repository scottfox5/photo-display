var afPhoto = angular.module('afPhotoApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngTouch', 'ui.bootstrap', 'ngFileUpload']);
console.log("afPhotoApp connected...")
  afPhoto.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
      templateUrl: '/public/views/home.html',
      })
      .when('/about', {
      templateUrl: '/public/views/about.html',
      })
      .when('/contact', {
      templateUrl: '/public/views/contact.html',
      })
      .when('/allProjects', {
      templateUrl: '/public/views/allProjects.html',
      // controller: 'ProjController',
      // controllerAs: 'proj',
      })
      .when('/projectScroll', {
      templateUrl: '/public/views/projectScroll.html',
      controller: 'ProjectScrollController',
      controllerAs: 'scroll',
      })
      .otherwise({
        redirectTo: '/',
      });
  },


]);
