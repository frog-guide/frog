'use strict';

/* jasmine specs for controllers go here */

describe('DocumentCtrl', function(){
  var DocumentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    DocumentCtrl = $controller('DocumentCtrl', {
      $scope: scope
    });
  }));


  describe('add new element', function() {
    it('should create navigation item', function() {
      scope.createEl();
    });
  });
});
