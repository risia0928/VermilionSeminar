angular.module("app")
	.controller("TitleCtrl", function($scope, $route) {
        $scope.$on('$routeChangeSuccess', function(){
            $scope.title = $route.current.title;
        });
	});