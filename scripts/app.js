(function(angular) {
	'use strict';
	angular.module("mainApp", [])
	.controller("StudentController", function($scope) {
		$scope.student = {
			firstName: "Adrien",
			lastName: "DURAND",
			fullName: function() {
				var studentObject;		
				studentObject = $scope.student;
				return studentObject.firstName + " " + studentObject.lastName;
			});
})(window.angular);