myApp.controller('ActivateController', ['$scope', '$http', '$location', '$routeParams', 'UserService', function($scope, $http, $location, $routeParams, UserService) {
  $scope.logout = UserService.logout;
  $scope.code = UserService.code;

  // Access route parameters
  if($routeParams.code != undefined) {
    // If user was already logged in, code will be here
    $scope.code.tempCode = $routeParams.code;
  } else {
    // Code was saved in the UserService before
    // bouncing user to log in screen
  }
  
  console.log('ActivateController loaded', $scope.code.tempCode);
}]);
