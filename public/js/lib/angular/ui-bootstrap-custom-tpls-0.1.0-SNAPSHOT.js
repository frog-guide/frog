angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.tabs"]);

angular.module("ui.bootstrap.tpls", ["template/tabs/pane.html","template/tabs/tabs.html"]);

angular.module('ui.bootstrap.tabs', [])
.controller('TabsController', ['$scope', '$element', function($scope, $element) {
  var panes = $scope.panes = [];

  this.select = $scope.select = function selectPane(pane) {
    angular.forEach(panes, function(pane) {
      pane.selected = false;
    });
    pane.selected = true;
  };

  this.addPane = function addPane(pane) {
    if (!panes.length) {
      $scope.select(pane);
    }
    panes.push(pane);
  };

  this.removePane = function removePane(pane) { 
    var index = panes.indexOf(pane);
    panes.splice(index, 1);
    //Select a new pane if removed pane was selected 
    if (pane.selected && panes.length > 0) {
      $scope.select(panes[index < panes.length ? index : index-1]);
    }
  };
}])
.directive('tabs', function() {
  return {
    restrict: 'EA',
    transclude: true,
    scope: {},
    controller: 'TabsController',
    templateUrl: 'template/tabs/tabs.html',
    replace: true
  };
})
.directive('pane', ['$parse', function($parse) {
  return {
    require: '^tabs',
    restrict: 'EA',
    transclude: true,
    scope:{
      heading:'@'
    },
    link: function(scope, element, attrs, tabsCtrl) {
      var getSelected, setSelected;
      scope.selected = false;
      if (attrs.active) {
        getSelected = $parse(attrs.active);
        setSelected = getSelected.assign;
        scope.$watch(
          function watchSelected() {return getSelected(scope.$parent);},
          function updateSelected(value) {scope.selected = value;}
        );
        scope.selected = getSelected ? getSelected(scope.$parent) : false;
      }
      scope.$watch('selected', function(selected) {
        if(selected) {
          tabsCtrl.select(scope);
        }
        if(setSelected) {
          setSelected(scope.$parent, selected);
        }
      });

      tabsCtrl.addPane(scope);
      scope.$on('$destroy', function() {
        tabsCtrl.removePane(scope);
      });
    },
    templateUrl: 'template/tabs/pane.html',
    replace: true
  };
}]);

angular.module("template/tabs/tabs.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/tabs/tabs.html",
    "<section class=\"content tabbable\">" +
    "  <section class=\"elements\">"+
    "   <nav class=\"elements-nav\">"+
    "       <ul class=\"elements-list nav nav-tabs\">" +
    "         <li class=\"element-item\">"+
    "           <a class=\"elements-lnk btn btn-new\"><span class=\"ic ic-add\"></span> Criar novo elemento</a>"+
    "         </li>" +
    "         <li class=\"elements-item\" ng-repeat=\"pane in panes\" ng-class=\"{active:pane.selected}\">" +
    "           <a class=\"elements-lnk\" href=\"\" ng-click=\"select(pane)\">{{pane.heading}}</a>" +
    "         </li>" +
    "       </ul>" +
    "   </nav>" +
    "  </section>" +
    "  <div ng-transclude></div>" +
    "</section>" +
    "");
}]);

angular.module("template/tabs/pane.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/tabs/pane.html",
    "<div class=\"tab-pane\" ng-class=\"{active: selected}\" ng-show=\"selected\" ng-transclude></div>" +
    "");
}]);
