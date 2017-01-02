"use strict";

//Define My App// 
let app = angular.module("Swoop", ['ngRoute', 'ngMaterial']);

let isAuth = (AuthFactory) => new Promise((resolve, reject) =>{
	AuthFactory.isAuthenticated()
	.then((userExists) =>{
		if(userExists){
			resolve();
		} else{
			reject();
		}
	});
});

app.config(function($routeProvider){
	$routeProvider

		.when('/loginPage', {
			templateUrl: 'partials/loginPage.html',
			controller: "LoginCtrl"
			// resolve: {isAuth}
		})		
		.when('/myMatches', {
			templateUrl: 'partials/myMatches.html',
			controller: "myMatchesCtrl",
			resolve: {isAuth}
		})		
		.when('/myRoutes', {
			templateUrl: 'partials/myRoutes.html',
			controller: "myRoutesCtrl",
			resolve: {isAuth}
		})
		.when('/createRoute', {
			templateUrl: 'partials/createRoute.html',
			controller: "RouteCtrl",
			resolve: {isAuth}
		})
		.otherwise('/loginPage'); 
	});
app.config(function($locationProvider) {
	$locationProvider.html5Mode(true)
})


app.run( ($location, FBCreds) => {

	let creds = FBCreds;

	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain
	};

	firebase.initializeApp(authConfig);

});