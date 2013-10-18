'use strict';

angular.module('MakerScore').factory('Units',  function () {
  var units = {};
  units.get = function(){
    return [
     {"number": "1", "description": "The basics", "topics": [
        {"subject": "Unix", "description": "Command-line 1"},
        {"subject": "Git", "description": "Version control 1."},
        {"subject": "Ruby", "description": "Ruby 1"},
        {"subject": "Ruby", "description": "Ruby 2"},
        {"subject": "Unix", "description": "Command-line revision. Unixoid test."}
      ]},
      {"number": "2", "description": "Intermediate Ruby &amp; Git", "topics": [
        {"subject": "Ruby", "description": "Ruby 3"},
        {"subject": "Ruby", "description": "Ruby 4"},
        {"subject": "Ruby", "description": "Ruby 5"},
        {"subject": "Git", "description": "Version control 2."},
        {"subject": "Git", "description": "Version control revision. Octocat test."}
      ]},
      {"number": "3", "description": "Test-Driven Development and OOP", "topics": [
        {"subject": "OOP", "description": "Object-oriented programming 1"},
        {"subject": "TDD", "description": "Test-driven development"},
        {"subject": "TDD", "description": "Writing beautiful code"},
        {"subject": "OOP", "description": "Object-oriented programming 2"},
        {"subject": "OOP", "description": "OOP revision. Architect test."}
      ]},
      {"number": "4", "description": "Making games (OOP and TDD)", "topics": [
        {"subject": "OOP", "description": "Teamwork: battleships"},
        {"subject": "Ruby", "description": "Ruby 6"},
        {"subject": "Ruby", "description": "Ruby 7"},
        {"subject": "Ruby", "description": "Recursion"},
        {"subject": "Ruby", "description": "Ruby revision. Rubyist test."}
      ]},
      {"number": "5", "description": "Introduction to web development", "topics": [
        {"subject": "Web", "description": "Sinatra"},
        {"subject": "Web", "description": "HTTP"},
        {"subject": "HTML &amp; CSS", "description": "HTML &amp; CSS"},
        {"subject": "Cloud", "description": "Heroku"},
        {"subject": "Web", "description": "Web development revision. Ronin test."}
      ]},
      {"number": "6", "description": "Database-backed applications.", "topics": [
        {"subject": "TDD", "description": "Capybara."},
        {"subject": "Databases", "description": "Relational databases"},
        {"subject": "Databases", "description": "SQL"},
        {"subject": "Security", "description": "Security"},
        {"subject": "Databases", "description": "Databases revision. Data test."}
      ]},
      {"number": "7", "description": "Intermediate web technologies.", "topics": [
        {"subject": "Javascript", "description": "Javascript 1"},
        {"subject": "Javascript", "description": "jQuery"},
        {"subject": "HTML &amp; CSS", "description": "HTML 2"},
        {"subject": "HTML &amp; CSS", "description": "CSS 2"},
        {"subject": "Web", "description": "Web development revision. Frontman test."}
      ]},
      {"number": "8", "description": "Advanced web technologies.", "topics": [
        {"subject": "Web", "description": "Websockets"},
        {"subject": "Cloud", "description": "AWS: EC2 &amp; S3"},
        {"subject": "HTML &amp; CSS", "description": "HTML 3"},
        {"subject": "HTML &amp; CSS", "description": "CSS 3"},
        {"subject": "Web", "description": "Advances web development revision. Polyglot test."}
      ]},
      {"number": "9", "description": "Rails introduction. Basic Rails app.", "topics": [
        {"subject": "Rails", "description": "Rails overview."},
        {"subject": "Databases", "description": "ActiveRecord"},
        {"subject": "Javascript", "description": "Javascript 2"},
        {"subject": "Rails", "description": "Routing and REST."},
        {"subject": "Security", "description": "Security revision. Sentry test."}
      ]},
      {"number": "10", "description": "Intermediate Rails.", "topics": [
        {"subject": "Web", "description": "APIs: Stripe, Twilio, etc."},
        {"subject": "Rails", "description": "Authentication with devise"},
        {"subject": "Javascript", "description": "UJS"},
        {"subject": "Rails", "description": "Asset pipeline"},
        {"subject": "Ruby", "description": "Ruby revision. Advanced Rubyist test."}
      ]},
      {"number": "11", "description": "Final Rails project, MVP.", "topics": [
        {"subject": "HTML &amp; CSS", "description": "Twitter Bootstrap"},
        {"subject": "TDD", "description": "Cucumber"},
        {"subject": "HTML &amp; CSS", "description": "Coffeescript. Sass."},
        {"subject": "Databases", "description": "STI and Polymorphics"},
        {"subject": "Rails", "description": "Rails revision. Machinist test."}
      ]},
      {"number": "12", "description": "Final Rails project, polished", "topics": [
        {"subject": "Rails", "description": "ActionMailer"},
        {"subject": "Rails", "description": "Background processing"},
        {"subject": "Rails", "description": "Caching"},
        {"subject": "OOP", "description": "Building your own gem"},
        {"subject": "Rails", "description": "Graduation!"}
      ]},
    ];
  };
  return units;
});
