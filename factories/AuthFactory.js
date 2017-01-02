"use strict";

app.factory("AuthFactory", function(){

	let newUser = null;

	let createUser = function(user){
		console.log(user);
		return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
	};


	let loginUser = function(user){
		return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
	};


	let logoutUser = function(){
		return firebase.auth().signOut();
	};

/////////////A Promise Wrapped Around A Listener/////////////////////
	let isAuthenticated = function(){
		return new Promise ((resolve, reject) => {
			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					newUser = user.uid;
					console.log("currentUser", newUser);
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	};

	let getUser = function(){
		return newUser;
	};

	return {createUser, loginUser, logoutUser, isAuthenticated, getUser};
});