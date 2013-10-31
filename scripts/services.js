'use strict';

angular.module('MakerScore').factory('Units',  function () {
  var units = {};
  units.get = function(){
    return [
     {"number": "1", "description": "The basics", "topics": [
        {"id": "010", "subject": "Unix", "description": "Command-line 1"},
        {"id": "020", "subject": "Git", "description": "Version control 1."},
        {"id": "030", "subject": "Ruby", "description": "Ruby 1"},
        {"id": "040", "subject": "Ruby", "description": "Ruby 2"},
        {"id": "050", "subject": "Unix", "description": "Command-line revision. Unixoid test."}
      ]},
      {"number": "2", "description": "Intermediate Ruby & Git", "topics": [
        {"id": "021", "subject": "Ruby", "description": "Ruby 3"},
        {"id": "022", "subject": "Ruby", "description": "Ruby 4"},
        {"id": "023", "subject": "Ruby", "description": "Ruby 5"},
        {"id": "024", "subject": "Git", "description": "Version control 2."},
        {"id": "025", "subject": "Git", "description": "Version control revision. Octocat test."}
      ]},
      {"number": "3", "description": "Test-Driven Development and OOP", "topics": [
        {"id": "031", "subject": "OOP", "description": "Object-oriented programming 1"},
        {"id": "032", "subject": "TDD", "description": "Test-driven development"},
        {"id": "033", "subject": "TDD", "description": "Writing beautiful code"},
        {"id": "034", "subject": "OOP", "description": "Object-oriented programming 2"},
        {"id": "035", "subject": "OOP", "description": "OOP revision. Architect test."}
      ]},
      {"number": "4", "description": "Making games (OOP and TDD)", "topics": [
        {"id": "041", "subject": "OOP", "description": "Teamwork: battleships"},
        {"id": "042", "subject": "Ruby", "description": "Ruby 6"},
        {"id": "043", "subject": "Ruby", "description": "Ruby 7"},
        {"id": "044", "subject": "Ruby", "description": "Recursion"},
        {"id": "045", "subject": "Ruby", "description": "Ruby revision. Rubyist test."}
      ]},
      {"number": "5", "description": "Introduction to web development", "topics": [
        {"id": "051", "subject": "Web", "description": "Sinatra"},
        {"id": "052", "subject": "Web", "description": "HTTP"},
        {"id": "053", "subject": "HTML & CSS", "description": "HTML & CSS"},
        {"id": "054", "subject": "Cloud", "description": "Heroku"},
        {"id": "055", "subject": "Web", "description": "Web development revision. Ronin test."}
      ]},
      {"number": "6", "description": "Database-backed applications.", "topics": [
        {"id": "061", "subject": "TDD", "description": "Capybara."},
        {"id": "062", "subject": "Databases", "description": "Relational databases"},
        {"id": "063", "subject": "Databases", "description": "SQL"},
        {"id": "064", "subject": "Security", "description": "Security"},
        {"id": "065", "subject": "Databases", "description": "Databases revision. Data test."}
      ]},
      {"number": "7", "description": "Intermediate web technologies.", "topics": [
        {"id": "071", "subject": "Javascript", "description": "Javascript 1"},
        {"id": "072", "subject": "Javascript", "description": "jQuery"},
        {"id": "073", "subject": "HTML & CSS", "description": "HTML 2"},
        {"id": "074", "subject": "HTML & CSS", "description": "CSS 2"},
        {"id": "075", "subject": "Web", "description": "Web development revision. Frontman test."}
      ]},
      {"number": "8", "description": "Advanced web technologies.", "topics": [
        {"id": "081", "subject": "Web", "description": "Websockets"},
        {"id": "082", "subject": "Cloud", "description": "AWS: EC2 & S3"},
        {"id": "083", "subject": "HTML & CSS", "description": "HTML 3"},
        {"id": "084", "subject": "HTML & CSS", "description": "CSS 3"},
        {"id": "085", "subject": "Web", "description": "Advances web development revision. Polyglot test."}
      ]},
      {"number": "9", "description": "Rails introduction. Basic Rails app.", "topics": [
        {"id": "091", "subject": "Rails", "description": "Rails overview."},
        {"id": "092", "subject": "Databases", "description": "ActiveRecord"},
        {"id": "093", "subject": "Javascript", "description": "Javascript 2"},
        {"id": "094", "subject": "Rails", "description": "Routing and REST."},
        {"id": "095", "subject": "Security", "description": "Security revision. Sentry test."}
      ]},
      {"number": "10", "description": "Intermediate Rails.", "topics": [
        {"id": "0A1", "subject": "Web", "description": "APIs: Stripe, Twilio, etc."},
        {"id": "0A2", "subject": "Rails", "description": "Authentication with devise"},
        {"id": "0A3", "subject": "Javascript", "description": "UJS"},
        {"id": "0A4", "subject": "Rails", "description": "Asset pipeline"},
        {"id": "0A5", "subject": "Ruby", "description": "Ruby revision. Advanced Rubyist test."}
      ]},
      {"number": "11", "description": "Final Rails project, MVP.", "topics": [
        {"id": "0B1", "subject": "HTML & CSS", "description": "Twitter Bootstrap"},
        {"id": "0B2", "subject": "TDD", "description": "Cucumber"},
        {"id": "0B3", "subject": "HTML & CSS", "description": "Coffeescript. Sass."},
        {"id": "0B4", "subject": "Databases", "description": "STI and Polymorphics"},
        {"id": "0B5", "subject": "Rails", "description": "Rails revision. Machinist test."}
      ]},
      {"number": "12", "description": "Final Rails project, polished", "topics": [
        {"id": "0C1", "subject": "Rails", "description": "ActionMailer"},
        {"id": "0C2", "subject": "Rails", "description": "Background processing"},
        {"id": "0C3", "subject": "Rails", "description": "Caching"},
        {"id": "0C4", "subject": "OOP", "description": "Building your own gem"},
        {"id": "0C5", "subject": "Rails", "description": "Graduation!"}
      ]},
    ];
  };
  return units;
});
