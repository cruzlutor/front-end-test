module.exports = function($stateProvider, $locationProvider, $urlRouterProvider){
    
    $stateProvider

        .state('news', {
            url: '/news',
            template: '<news></news>'
        })

        .state('analytics', {
            url: '/analytics',
            template: '<analytics></analytics>'
        });

    $urlRouterProvider.otherwise('/news');
};