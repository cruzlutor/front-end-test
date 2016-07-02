var angular = require('angular');

function news() {

    var controller = function($scope) {
    };

    var link = function(){};

    var template =  'views/news.html';

    return {
        scope: {},
        controller: controller,
        link: link,
        templateUrl: template
    };
}

var ngModule = require('./');
ngModule.directive('news', [news]);