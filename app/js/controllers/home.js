(function () {
	'use strict';

	angular
		.module('App')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$scope', '$ionicPopup', 'Modals'];
	function HomeController($scope, $ionicPopup, Modals) {

		$scope.HelloWorld = function () {
			$ionicPopup.alert({
				title: 'Add Releases',
				template: 'This app was made to try and help track multiple releases dates. Click Create Release below to start.',
     		cssClass: 'animated bounceInDown'
			});
		};

		//Center content
		//1. http://codepen.io/mhartington/pen/gcHeL
		//2. http://codepen.io/anon/pen/meQJvp
	}
})();
