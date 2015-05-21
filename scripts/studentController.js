mainApp.controller('studentController', function($scope) {
	$scope.student = {
		firstName: "Adrien",
		lastName: "DURAND",
		fees:10000,
		subjects:[
		{name:'Physics',marks:13},
		{name:'Chemistry',marks:16},
		{name:'Cheval',marks:18},
		{name:'Math',marks:5},
		{name:'English',marks:17}
		],
		fullName: function() {
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		},
		reset: function() {
			$scope.firstNames = "Mahesh";
			$scope.lastNames = "Parashar";
			$scope.emails = "MaheshParashar@tutorialspoint.com";
		},
		getStudents: function() {
			var url="../assets/data.json";
			$http.get(url).success( function(response) {
				$scope.obj = response;
			});
		}
	};
});