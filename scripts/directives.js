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

app.directive('topic',function(){
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    // scope: {},
    require: '^topicGroup',
    template: '<li class="topic"><span ng-transclude></span><select ng-model="score" ng-change="updateScore()"><option value="0"></option><option value="1">Beginner</option><option value="2">Imitator</option><option value="3">Repeater</option><option value="4">Habitual</option><option value="5">Master</option></select></li>',
    link: function(scope, element, attrs,topicGroupController){
      scope.subject = attrs.subject;
      scope.score = 0;
      topicGroupController.addTopic(scope);
      scope.updateScore = function() {
        topicGroupController.updateScore();
      };
    }
  };
});

app.directive('score', function(){
  return {
    scope: {score:"@",completion:"@"},
    restrict: 'E',
    template: '<span class="score"><span>JSA: {{score | number:1}}</span> | <span>Completion: {{completion * 100 | number:0 }}%</span></span>'
  };
});

app.directive('week',function(){
  return {
    scope: {number:"@",description:"@"},
    restrict: 'E',
    transclude: true,
    replace: true,
    template: '<div class="week"><div class="header"><div class="number">{{number}}</div><div class="description">{{description}}</div></div><div class="body"><ol class="days" ng-transclude></ol></div></div>'
  };
});