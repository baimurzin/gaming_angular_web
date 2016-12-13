/**
 * Created by ElessarST on 14.04.2015.
 */
angular
    .module('auth')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$http', '$location', '$timeout', 'AuthInfo'];
function LoginController($scope, $http, $location, $timeout, AuthInfo) {
    var vm = this;
    vm.login = login;

    function login(){
        AuthInfo.login(vm.user).then(function(data){
            $scope.$emit('Auth');
            $location.path('/');
        }, function(error){
            vm.error = error;
        });
    }
}