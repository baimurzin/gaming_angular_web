/**
 * Created by ElessarST on 14.04.2015.
 */
angular
    .module('auth')
    .config(InterceptorConfig);

InterceptorConfig.$inject = ['$httpProvider'];
function InterceptorConfig($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
}