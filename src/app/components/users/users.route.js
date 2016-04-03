(function() {
    'use strict';

    angular
        .module('platalbankKhube.users')
        .config(UsersRouter)
    ;

    /** @ngInject */
    function UsersRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/users', '/users/');
        $stateProvider
            .state('index.users', {
                url: "users",
                template: "<ui-view></ui-view>"
            })
            .state('index.users.home', {
                url: "/",
                templateUrl: "app/components/users/home.html",
                controller: 'UsersHomeController',
                controllerAs: 'UseHomeCtl',
                resolve: {
                    users: function(User) {
                        return User.findAll({'page_size': 2000});
                    }
                }
            })
        ;
    }
})();