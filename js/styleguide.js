'use strict';

angular.module('styleGuide', ['ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/overview', {
				templateUrl: 'partials/overview.html',
				controller: 'MainCtrl'
			})
			.when('/css', {
				templateUrl: 'partials/css.html',
				controller: 'MainCtrl'
			})
			.when('/typography', {
				templateUrl: 'partials/typography.html',
				controller: 'MainCtrl'
			})
			.when('/html', {
				templateUrl: 'partials/html.html',
				controller: 'MainCtrl'
			})
			.when('/forms', {
				templateUrl: 'partials/forms.html',
				controller: 'MainCtrl'
			})
			.when('/components', {
				templateUrl: 'partials/components.html',
				controller: 'MainCtrl'
			})
			.when('/layouts', {
				templateUrl: 'partials/layouts.html',
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
