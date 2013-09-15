app = angular.module("MakerScore",[]);

app.directive('topicGroup', function(){
  return {
    controller: function($scope) {
      $scope.topics = [];
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
