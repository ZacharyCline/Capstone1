"use strict";

app.factory("RouteFactory", function($http, FBCreds){



	let allRoutes = function () {
		let Routes = [];
		return new Promise ((resolve, reject) => {
			$http.get(`${FBCreds.URL}/Routes.json`)
			.then((routeObj) => {
				let routeList = routeObj.data;
				Object.keys(routeList).forEach((key) =>{
					routeList[key].id = key; 
					Routes.push(routeList[key]);
				});
				resolve(Routes);
			})
		});
	};	
	let allMyRoutes = function (currentUser) {
		let Routes = [];
		return new Promise ((resolve, reject) => {
			$http.get(`${FBCreds.URL}/Routes.json?orderBy="uid"&equalTo="${currentUser}"`)
			.then((routeObj) => {
				let routeList = routeObj.data;
				Object.keys(routeList).forEach((key) =>{
					routeList[key].id = key; 
					Routes.push(routeList[key]);
				});
				resolve(Routes);
			})
		});
	};	


	let allMatches = function (currentRoute) {
		console.log("allMatches", currentRoute);
		let Routes = [];
		return new Promise ((resolve, reject) => {
			// https://swoop-de301.firebaseio.com/Routes.json?orderBy="Destination"&equalTo="2010 Gallatin Park North"
			$http.get(`${FBCreds.URL}/Routes.json?orderBy="Destination"&equalTo="${currentRoute}"`)
			.then((routeObj) => {
				console.log("routeobj", routeObj);
				let routeList = routeObj.data;
				Object.keys(routeList).forEach((key) =>{
					routeList[key].id = key; 
					Routes.push(routeList[key]);
				});
				resolve(Routes);
				console.log("Routes", Routes);
			})
		});
	};



	let singleRoute = (routeId) => {
		return new Promise ((resolve, reject) => {
			$http.get(`${FBCreds.URL}/Routes/${routeId}.json`)
			.then((routeObj) => {
				resolve(routeObj);
			}).error((error)=> {
				reject(error);
			});
		});
	};


	let postRoute = (newRoute) => {
		return new Promise ((resolve, reject) => {
			$http.post(`${FBCreds.URL}/Routes.json`, angular.toJson(newRoute))
			.then((obj) => {
				resolve(obj);
			});
		});
	};


	return {allRoutes, singleRoute, postRoute, allMyRoutes, allMatches};
});
// 





	// let riderRoutes = function (currentRoute) {
	// 	let Routes = [];
	// 	return new Promise ((resolve, reject) => {
	// 		$http.get(`${FBCreds.URL}/Routes.json?orderBy="Destination"&equalTo="currentRoute.Destination"`)
	// 		.then((routeObj) => {
	// 			let routeList = routeObj.data;
	// 			Object.keys(routeList).forEach((key) =>{
	// 				routeList[key].id = key; 
	// 				Routes.push(routeList[key]);
	// 			});
	// 			resolve(Routes);
	// 		});
	// 	});
	// };
