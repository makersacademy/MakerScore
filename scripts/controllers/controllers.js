'use strict';


var app = angular.module('MakerScore')
app.controller('TopicGroupCtrl', function ($scope, Units, localStorageService) {
  $scope.units = Units.get();
  $scope.subject_topics = {};
  $scope.subject_scores = {};

  $scope.topics = _.flatten(_.map($scope.units,function(week){return week.topics;}));

  var calculateScore = function(topics){
    var non_zero_topics = _.select(topics,function(t){return t.score!=0});
    var total = _.reduce(non_zero_topics,function(sum,t){return parseInt(t.score)+sum},0);
    return { score: (total / non_zero_topics.length)||0,
            completion: (non_zero_topics.length / topics.length)||0}
  };

  $scope.updateScore = function(topic){
    localStorageService.add('topics:'+topic.id+':score',topic.score);
    _.each($scope.subject_topics,function(topics,subject){
      $scope.subject_scores[subject] = calculateScore(topics);
    });
    var overall_scores = calculateScore($scope.topics);
    $scope.score = overall_scores.score;
    $scope.completion = overall_scores.completion;
  };

  _.each($scope.topics,function(topic){
    topic.score = localStorageService.get('topics:'+topic.id+':score');
    if (topic.score==null){
      topic.score = 0;
    };
    if(typeof $scope.subject_topics[topic.subject]==='undefined'){
      $scope.subject_topics[topic.subject]=[];
    }
    $scope.subject_topics[topic.subject].push(topic);
    $scope.updateScore(topic);
  },this);
});
