'use strict';

var app = angular.module('MakerScore')
app.controller('TopicGroupCtrl', function ($scope, Units) {
  $scope.topics = [];
  $scope.units = Units.get();
  $scope.subject_topics = {};
  $scope.subject_scores = {};

  this.addTopic = function(topic) {
    $scope.topics.push(topic);
    if(typeof $scope.subject_topics[topic.subject]==='undefined'){
      $scope.subject_topics[topic.subject]=[];
    }
    $scope.subject_topics[topic.subject].push(topic);
    this.updateScore();
  };
  var calculateScore = function(topics){
    var non_zero_topics = _.select(topics,function(t){return t.score!=0});
    var total = _.reduce(non_zero_topics,function(sum,t){return parseInt(t.score)+sum},0);
    return { score: (total / non_zero_topics.length)||0,
            completion: (non_zero_topics.length / topics.length)||0}
  };
  this.updateScore = function(){
    _.each($scope.subject_topics,function(topics,subject){
      $scope.subject_scores[subject] = calculateScore(topics);
    });
    var overall_scores = calculateScore($scope.topics);
    $scope.score = overall_scores.score;
    $scope.completion = overall_scores.completion;
  };
});
