'use strict';

angular.module('styleGuide', ['ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/overview', {
				templateUrl: 'partials/overview.html',
				controller: 'MainCtrl'
			})
			.when('/typography', {
				templateUrl: 'partials/typography.html',
				controller: 'MainCtrl'
			})
			.otherwise({redirectTo: '/overview'})
		;

		// if(window.history && window.history.pushState) {
		// 	$locationProvider.html5Mode({
		// 		enabled: true,
		// 		requireBase: false
		// 	});
		// }
	})
	.controller('MainCtrl', function($scope) {
		Prism.highlightAll();
	})
;