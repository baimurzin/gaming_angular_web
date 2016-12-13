angular
    .module('core')
    .service('ApiService', ApiService);

ApiService.$inject = ['$http', 'Const'];
function ApiService($http, Const) {
    return {
        api: function (partUrl) {
            return Const.API_URL + partUrl;
        }
    };
}