'use strict';

var app = angular.module("MakerScore");

app.directive('topicGroup', function(){
  return {
    controller: 'TopicGroupCtrl',
    restrict: 'AE',
    template: '<div ng-transclude></div>',
    replace: true,
    transclude: true
  };
});

app.directive('score', function(){
  return {
    scope: {score:"@",completion:"@", subject:"@"},
    restrict: 'E',
    template: '<span class="score" ng-show="completion > 0">{{subject}}: <span>JSA: {{score | number:1}}</span> | <span>Completion: {{completion * 100 | number:0 }}%</span></span>'
  };
});
