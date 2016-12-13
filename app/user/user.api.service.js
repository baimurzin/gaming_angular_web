/**
 * Created by ElessarST on 14.04.2015.
 */
angular
    .module('user')
    .service('UserApiService', UserApiService);


UserApiService.$inject = ['$http', 'ApiService'];
function UserApiService($http, ApiService){
    return {
        loginUser: loginUser,
        register: register
    };

    function loginUser(param){
        return $http.post(ApiService.api('login'), param);
    }

    function register(user) {
        return $http.post(ApiService.api('register'), user);
    }
}