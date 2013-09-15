app = angular.module("MakerScore",[]);

app.directive('topicGroup', function(){
  return {
    controller: function($scope) {
      var topics = $scope.topics = [];
      this.addTopic = function(topic) {
        topics.push(topic);
      };
      $scope.score = 0;
      $scope.completion = 0;
      this.updateScore = function(){
        non_zero_topics = _.select(topics,function(t){return t.score!=0});
        var total = _.reduce(non_zero_topics,function(sum,t){return t.score + sum},0);
        $scope.score = total / non_zero_topics.length;
        $scope.completion = non_zero_topics.length / topics.length;
      };
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
    template: '<li class="topic"><span ng-transclude></span><input type="number" min="0" max="5" ng-model="score" ng-change="updateScore()"></li>',
    link: function(scope, element, attrs,topicGroupController){
      topicGroupController.addTopic(scope);
      scope.score = 0;
      scope.updateScore = function() {
        topicGroupController.updateScore();
      };
    }
  };
});
