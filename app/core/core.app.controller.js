/**
 * Created by ElessarST on 14.04.2015.
 */
angular
    .module('core')
    .controller('AppController', AppController);

AppController.$inject = ['$scope', '$http', '$location', '$timeout', 'AuthInfo'];
function AppController($scope, $http, $location, $timeout, AuthInfo){
    var vm = this;

    updateInfo();
    vm.logout = logout;

    $scope.$on('Auth', function(event, data){
        updateInfo();
    });

    function updateInfo(){
        vm.user = AuthInfo.getUser();
        vm.token = JSON.parse(localStorage.getItem('token'));
    }


    function logout() {
        AuthInfo.logout();
        vm.token = '';
    }
}