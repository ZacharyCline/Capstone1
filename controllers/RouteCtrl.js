"use strict";

app.controller("RouteCtrl", function($scope, AuthFactory, $location, RouteFactory){

	$scope.btn = "Add Your Destination";
	let currentUser = AuthFactory.getUser();
		$scope.routeObj = {
			uid: currentUser,
			Title:"",
			Start: "",
			Destination: "",
			Direction: null,
			Rider: null,
			Driver: null,			


		};

	$scope.addNewRoute = function(){
		RouteFactory.postRoute($scope.routeObj)
		.then((response) => {
			// $scope.currentRouteId = response.name;
			$location.url("/myRoutes")
			$scope.$apply();

		});
	};

});

