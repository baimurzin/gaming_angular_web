/**
 * Created by ElessarST on 14.04.2015.
 */
angular
    .module('core')
    .config(CoreRoutes);

CoreRoutes.$inject = ['$routeProvider'];
function CoreRoutes($routeProvider){
    $routeProvider.otherwise({
            redirectTo:'/'
        });
}