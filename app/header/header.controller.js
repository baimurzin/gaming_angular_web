/**
 * Created by ElessarST on 15.04.2015.
 */

angular
    .module('header')
    .controller('HeaderController', HeaderController);

HeaderController.$inject = ['$scope', 'AuthInfo', 'alertService'];

function HeaderController($scope, AuthInfo, alertService){
    var vm = this;
    this.authState = AuthInfo.isLogin();
    this.logout = AuthInfo.logout;

    $scope.$on('authStateChanged', authStateChanged);
    $scope.$on('newActive', setActive);

    function authStateChanged(event, state){
        vm.authState = state;
    }

    function setActive(event, item){
        this.active = item;
    }
}