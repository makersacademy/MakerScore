app = angular.module("MakerScore",[]);

app.directive('topicGroup', function(){
  return {
    controller: function($scope) {
      var topics = $scope.topics = [];
      this.addTopic = function(topic) {
        topics.push(topic);
      };
      $scope.score = 0;
      this.updateScore = function(){
        var total = 0
        angular.forEach(topics, function(topic){
          total+=topic.score;
        });
        $scope.score = total / topics.length;
      };
    },
    restrict: 'AE',
    template: '<div>{{score}}<span ng-transclude></span></div>',
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
