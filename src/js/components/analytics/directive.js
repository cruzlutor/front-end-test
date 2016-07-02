var angular = require('angular');

function analytics() {

    var controller = function($scope) {
    };

    var link = function(){};

    var template =  'views/analytics.html';

    return {
        scope: {},
        controller: controller,
        link: link,
        templateUrl: template
    };
}

var ngModule = require('./');
ngModule.directive('analytics', [analytics]);