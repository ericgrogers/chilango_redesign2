/**
 * Created by ericrogers on 5/10/14.
 */

angular.module('main',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/landing', {
            templateUrl : 'partials/landing.html',
            controller : 'LandCtrl'
        }).when('/menu', {
            templateUrl : 'partials/menu.html',
            controller : 'MenuCtrl'
        }).when('/reservations', {
            templateUrl : 'partials/reservations.html',
            controller : 'ReservationsCtrl'
        }).when('/gcards', {
            templateUrl : 'partials/gcards.html',
            controller : 'GcardsCtrl'
        }).when('/about', {
            templateUrl : 'partials/about.html',
            controller : 'AboutCtrl'
        }).when('/contact', {
            templateUrl : 'partials/contact.html',
            controller : 'ContactCtrl'
        }).otherwise({
            redirectTo : '/landing'
        })
    })
    // Landing Controller
    .controller('LandCtrl', function($scope, $routeParams){

    })
    // Menu Controller
    .controller('MenuCtrl', function($scope, $routeParams){

    })
    // Reservations Controller
    .controller('ReservationsCtrl', function($scope, $routeParams){

    })
    // Gift Cards Controller
    .controller('GcardsCtrl', function($scope, $routeParams){

    })
    // About Controller
    .controller('AboutCtrl', function($scope, $routeParams){

    })
    // Contact Controller
    .controller('ContactCtrl', function($scope, $routeParams){

    });