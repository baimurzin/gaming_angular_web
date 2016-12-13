/**
 * Created by vlad on 30.08.15.
 */
angular
    .module('util')
    .factory('alertService', alertService);

alertService.$inject = ['$rootScope', '$timeout'];
function alertService($rootScope, $timeout) {
    var service = {
            add: add,
            closeAlert: closeAlert,
            closeAlertIdx: closeAlertIdx,
            clear: clear,
            get: get
        };
    $rootScope.alerts = [];

    return service;
    function add(type, msg) {
        var alert = {
            type: type,
            msg: msg,
            close: function() {
                return closeAlert(this);
            }
        };
        $timeout(closeAlert, 1700, true, alert);
        return $rootScope.alerts.push(alert);
    }

    //function add(type, msg) {
    //    return $rootScope.alerts.push({
    //        time: 3000,
    //        type: type,
    //        msg: msg,
    //        close: function() {
    //            return closeAlert(this);
    //        }
    //    });
    //}

    function closeAlert(alert) {
        return closeAlertIdx($rootScope.alerts.indexOf(alert));
    }

    function closeAlertIdx(index) {
        return $rootScope.alerts.splice(index, 1);
    }

    function clear(){
        $rootScope.alerts.splice(0,alerts.length)
    }

    function get() {
        return $rootScope.alerts;
    }
}