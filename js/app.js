/* Chilango Restaurant
   Author: Eric Rogers
 */

angular.module('main',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/home', {
            templateUrl : 'partials/home.html',
            controller : 'HomeCtrl'
        }).when('/lunch', {
            templateUrl : 'partials/lunch.html',
            controller : 'LunchCtrl'
        }).when('/reservations', {
            templateUrl : 'partials/reservations.html',
            controller : 'ReservationsCtrl'
        }).when('/dinner', {
            templateUrl : 'partials/dinner.html',
            controller : 'DinnerCtrl'
        }).when('/about', {
            templateUrl : 'partials/about.html',
            controller : 'AboutCtrl'
        }).when('/contact', {
            templateUrl : 'partials/contact.html',
            controller : 'ContactCtrl'
        }).otherwise({
            redirectTo : '/home'
        })
    })
    // Home Controller
    .controller('HomeCtrl', function($scope, $routeParams){
    })
    // Menu Controller
    .controller('LunchCtrl', function($scope, $routeParams){

    })
    // Reservations Controller
    .controller('ReservationsCtrl', function($scope, $routeParams){

    })
    // Gift Cards Controller
    .controller('DinnerCtrl', function($scope, $routeParams){

    })
    // About Controller
    .controller('AboutCtrl', function($scope, $routeParams){

    })
    // Contact Controller
    .controller('ContactCtrl', function($scope, $routeParams){

    });