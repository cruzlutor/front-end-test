var angular = require('angular');

function mainNav() {

    var controller = function($scope, $location) {

        function select(section){
            return ($location.path().substr(0, section.length) === section) ? 'active' : '';
        }

        angular.extend(this, {
            select: select,

        });
    };

    var link = function(){};

    var template =  'views/nav.html';

    return {
        scope: {},
        controllerAs : 'vm',
        controller: controller,
        link: link,
        templateUrl: template
    };
}

var ngModule = require('./');
ngModule.directive('mainNav', [mainNav]);