
var angular = require('angular');
require('angular-resource');
require('angular-route');
require('angular-ui-router');
require('./components/news');
require('./components/nav');
require('./components/analytics');

angular.element(document).ready(function() {

    var requires = [
        'ngResource',
        'ngRoute',
        'ui.router',

        // app components
        'app.news',
        'app.nav',
        'app.analytics'
    ];

    angular.module('app', requires);
    angular.module('app').config(require('./config'));
    angular.module('app').run(require('./run'));

    angular.bootstrap(document, ['app']);

});