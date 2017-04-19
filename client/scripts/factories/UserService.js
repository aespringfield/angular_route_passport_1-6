myApp.factory('UserService', ['$http', '$location', '$route', function($http, $location, $route){
  console.log('User Service Loaded');
  var code = {};
  var userObject = {};

  return {
    userObject : userObject,
    code: code,

    getuser : function(){
      $http.get('/user').then(function(response) {
          if(response.data.username) {
              // user has a curret session on the server
              userObject.userName = response.data.username;
              console.log('User Data: ', userObject.userName);
          } else {
              // Store the activation code for later use
              code.tempCode = $route.current.params.code;
              console.log('Activation code: ', $route.current.params.code);

              // user has no session, bounce them back to the login page
              $location.path("/home");
          }
      });
    },

    logout : function() {
        $http.get('/user/logout').then(function(response) {
          console.log('logged out');
          $location.path("/home");
        });
    }
  };
}]);
