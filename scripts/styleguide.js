angular.module('styleGuide', ['ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/overview', {
				templateUrl: 'partials/overview.html',
				controller: 'MainCtrl',
				activeTab: 'overview'
			})
			.when('/css', {
				templateUrl: 'partials/css.html',
				controller: 'MainCtrl',
				activeTab: 'css'
			})
			.when('/typography', {
				templateUrl: 'partials/typography.html',
				controller: 'MainCtrl',
				activeTab: 'typography'
			})
			.when('/html', {
				templateUrl: 'partials/html.html',
				controller: 'MainCtrl',
				activeTab: 'html'
			})
			.when('/forms', {
				templateUrl: 'partials/forms.html',
				controller: 'MainCtrl',
				activeTab: 'forms'
			})
			.when('/components', {
				templateUrl: 'partials/components.html',
				controller: 'MainCtrl',
				activeTab: 'components'
			})
			.when('/layouts', {
				templateUrl: 'partials/layouts.html',
				controller: 'MainCtrl',
				activeTab: 'layouts'
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
	.controller('MainCtrl', function($scope, $route) {
		$scope.$route = $route;
		Prism.highlightAll();
	})
;
