"use strict";

app.controller("LoginCtrl", function ($scope, AuthFactory, $location){

	$scope.account = {
		email: "zcline08@gmail.com",
		password: "password"
	};

	$scope.register = () => {
		AuthFactory.createUser($scope.account)
			.then((userInput) => {
				$scope.login();
			});
	};

	$scope.login = () => {
		// console.log("clicked");
		AuthFactory.loginUser($scope.account)
			.then((user) => {
			$location.path("/myRoutes");
			$scope.$apply();
				
			});
	};

// 	$scope.loginNew = () => {
// 		console.log("clicked");
// 		AuthFactory.loginUser($scope.account)
// 			.then((user) => {
// 			$location.path("/firstRoute")
// 			$scope.$apply();
				
// 			});
// 	};

});
