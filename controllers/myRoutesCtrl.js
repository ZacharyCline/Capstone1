"use strict";

app.controller("myRoutesCtrl", function($scope, RouteFactory, AuthFactory, $location){
	let currentUser = AuthFactory.getUser();
	RouteFactory.allMyRoutes(currentUser)
	.then((routeArray) => {
		$scope.routes = routeArray;
		$scope.$apply();


		$scope.getDestinations = function(destinations){
			console.log("destination", destinations);
		RouteFactory.allMatches(destinations)
		.then((response) => {
			// $scope.currentRouteId = response.name;
			$location.url("/myMatches")
			$scope.$apply();

		});
	};
	});
});


