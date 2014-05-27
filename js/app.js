/* Chilango Restaurant
   Author: Eric Rogers
 */

angular.module('main',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/home', {
            templateUrl : 'home.html',
            controller : 'HomeCtrl',
            title: 'Home'
        }).when('/lunch', {
            templateUrl : 'lunch.html',
            controller : 'LunchCtrl',
            reloadOnSearch: false,
            title: 'Lunch Menu'
        }).when('/reservations', {
            templateUrl : 'reservations.html',
            controller : 'ReservationsCtrl',
            title: 'Reservations'
        }).when('/dinner', {
            templateUrl : 'dinner.html',
            controller : 'DinnerCtrl',
            title: 'Dinner Menu'
        }).when('/about', {
            templateUrl : 'about.html',
            controller : 'AboutCtrl',
            title: 'About'
        }).when('/contact', {
            templateUrl : 'contact.html',
            controller : 'ContactCtrl',
            title: 'Contact'
        }).otherwise({
            redirectTo : '/home'
        })
    })
    // Home Controller
    .controller('HomeCtrl', function($document, $scope, $routeParams){
        $document[0].title = 'Home';
    })
    // Lunch Menu Controller
    .controller('LunchCtrl', function($document,$scope, $routeParams){
        $document[0].title = 'Lunch Menu';
    })
    // Reservations Controller
    .controller('ReservationsCtrl', function($scope, $routeParams){
    })
    // Dinner Menu Controller
    .controller('DinnerCtrl', function($scope, $routeParams){

    })
    // About Controller
    .controller('AboutCtrl', function($scope, $routeParams){

    })
    // Contact Controller
    .controller('ContactCtrl', function($scope, $routeParams){

    });

