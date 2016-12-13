/**
 * Created by ElessarST on 15.04.2015.
 */
angular
    .module('header')
    .service('headerService', headerService);


headerService.$inject = ['$rootScope', 'AuthInfo'];
function headerService($rootScope, AuthInfo){
    var active = '';
    var func = {
        getActive: getActive,
        setActive: setActive,
        authChanged: authChanged
    };

    return func;

    function getActive(){
        return active;
    }

    function setActive(newActive){
        active = newActive;
        $rootScope.$broadcast('newActive', active);
    }

    function authChanged(changed){
        $rootScope.$broadcast('authChanged', changed);
    }

}