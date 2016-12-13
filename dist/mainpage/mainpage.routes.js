/**
 * Created by ElessarST on 14.04.2015.
 */
angular
    .module('mainpage')
    .config(MainPageRoutes);

MainPageRoutes.$inject = ['$routeProvider'];
function MainPageRoutes($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'MainPageController as main',
            templateUrl: '/mainpage/partials/mainpage.template.html',
            resolve: {
                StaticData: loadStaticData
            }
        })
}

loadStaticData.$inject = ['StaticData'];

function loadStaticData(StaticData){
    return StaticData.promise();
}
