/**
 * Created by ElessarST on 14.04.2015.
 */
angular
    .module('auth')
    .config(AuthRoutes);

AuthRoutes.$inject = ['$routeProvider'];
function AuthRoutes($routeProvider){
    $routeProvider
        .when('/login', {
            templateUrl: '/auth/partials/auth.login.template.html',
            controller:'LoginController as auth',
            name:'notAuth'
        });
}
