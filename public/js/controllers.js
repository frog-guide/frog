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

      return false;
    })
  });

  // $http.get('/api/posts').
  //   success(function(data, status, headers, config) {
  //     $scope.posts = data.posts;
  //   });
}

function DocumentCtrl($scope, $http) {
  //Abre box para novo item
  $("#btn-new").on("click", function(){
    $("#mask").addClass("mask").show();
    $(".box-add-item").show();
  });

  //Fecha box novo item
  $("#mask").on("click", function(){
    $(this).removeClass("mask").hide();
    $(".box-add-item").hide();
  });

  $http.get('/api/elements').
    success(function(data, status, headers, config) {
        $scope.elements = data.elements;
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
