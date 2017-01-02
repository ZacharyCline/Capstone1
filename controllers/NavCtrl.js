app.controller('NavCtrl', function($scope){ 
    $scope.navItems = [
                   		{name: 'Logout',
                   		url: '/loginPage'},

             					{name: "Create New Routes",
          						url: '/createRoute'},

                      {name: "Scheduled Pickups",
                   		url: '/items/list'},

                      {name: "My Routes",
                   		url: '/myRoutes'}

    				   ];
});