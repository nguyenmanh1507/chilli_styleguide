'use strict';

angular.module('styleGuide', ['ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/overview', {
				templateUrl: 'overview.html'
			})
			.when('/typography', {
				templateUrl: 'typography.html'
			})
			.otherwise({redirectTo: '/'})
		;

		if(window.history && window.history.pushState) {
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
		}
	})
;