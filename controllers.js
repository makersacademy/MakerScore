app = angular.module("MakerScore",[]);

app.directive('topicGroup', function(){
  return {
    controller: function($scope) {
      $scope.topics = [];
      this.addTopic = function(topic) {
        $scope.topics.push(topic);
      };
      var calculateScore = function(topics){
        var non_zero_topics = _.select(topics,function(t){return t.score!=0});
        $scope.total = _.reduce(non_zero_topics,function(sum,t){return parseInt(t.score)+sum},0);
        return { score: ($scope.total / non_zero_topics.length)||0,
                completion: (non_zero_topics.length / topics.length)||0}
      };
      this.updateScore = function(){
        var score_object = calculateScore($scope.topics);
        $scope.score = score_object.score;
        $scope.completion = score_object.completion;
      };
      this.updateScore();
    },
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
    scope: {},
    require: '^topicGroup',
    template: '<li class="topic"><span ng-transclude></span><select ng-model="score" ng-change="updateScore()"><option value="0"></option><option value="1">Beginner</option><option value="2">Imitator</option><option value="3">Repeater</option><option value="4">Habitual</option><option value="5">Master</option></select></li>',
    link: function(scope, element, attrs,topicGroupController){
      topicGroupController.addTopic(scope);
      scope.score = 0;
      scope.updateScore = function() {
        topicGroupController.updateScore();
      };
    }
  };
});
