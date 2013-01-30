'use strict';

/* Controllers */

function UserLoginCtrl($scope) {
  $(document).ready(function(){
    $("#cad-frog").on("click", function(){
      if ( $("#form-cadastro").is(':visible') ) {
        $("#form-cadastro").hide();
      }
      else {
      $("#form-cadastro").show();
      }
      return false;
    });

    $("#show-cadastro").on("click", function(){
      $("#login").hide();
      $("#form-cadastro").hide();
      $("#cadastro").show();
    })
  });

  // $http.get('/api/posts').
  //   success(function(data, status, headers, config) {
  //     $scope.posts = data.posts;
  //   });
}

function DocumentCtrl($scope, $http) {
    $http.get('/api/elements').
        success(function(data, status, headers, config) {
            $scope.elements = data.elements;
        });
    $(document).ready(function() {
        // var editor = CodeMirror.fromTextArea(document.getElementById("code"), {});
    });
}

// function AddPostCtrl($scope, $http, $location) {
//   $scope.form = {};
//   $scope.submitPost = function () {
//     $http.post('/api/post', $scope.form).
//       success(function(data) {
//         $location.path('/');
//       });
//   };
// }

// function ReadPostCtrl($scope, $http, $routeParams) {
//   $http.get('/api/post/' + $routeParams.id).
//     success(function(data) {
//       $scope.post = data.post;
//     });
// }

// function EditPostCtrl($scope, $http, $location, $routeParams) {
//   $scope.form = {};
//   $http.get('/api/post/' + $routeParams.id).
//     success(function(data) {
//       $scope.form = data.post;
//     });

//   $scope.editPost = function () {
//     $http.put('/api/post/' + $routeParams.id, $scope.form).
//       success(function(data) {
//         $location.url('/readPost/' + $routeParams.id);
//       });
//   };
// }

// function DeletePostCtrl($scope, $http, $location, $routeParams) {
//   $http.get('/api/post/' + $routeParams.id).
//     success(function(data) {
//       $scope.post = data.post;
//     });

//   $scope.deletePost = function () {
//     $http.delete('/api/post/' + $routeParams.id).
//       success(function(data) {
//         $location.url('/');
//       });
//   };

//   $scope.home = function () {
//     $location.url('/');
//   };
// }
