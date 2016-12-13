/**
 * Created by ElessarST on 14.04.2015.
 */
angular
    .module('mainpage')
    .controller('MainPageController', MainPageController);

MainPageController.$inject = ['$scope', 'ComplaintApi', 'StaticData'];

function MainPageController($scope, ComplaintApi, StaticData){

    var vm = this;
    var allObj = {name: 'Все', id: -1};
    vm.static = StaticData;
    vm.doSearch = doSearch;
    initialize();


    function doSearch(){
        var filter = angular.copy(vm.filter);
        filterProperties(filter, ['category', 'location']);
        ComplaintApi.filterComplaints(filter)
            .success(function(data){
                console.log(data);
            })
    }

    function initialize(){
        vm.filter = {};
        vm.static.statuses.unshift('Все');
        vm.static.categories.unshift(allObj);
        vm.static.locations.unshift(allObj);
        vm.filter.category = allObj;
        vm.filter.status = 'Все';
        vm.filter.location = allObj;
    }

    function filterProperties(obj, properties){
        for (var it = 0; it < properties.length; it++){
            if(!obj.hasOwnProperty(properties[it]))
                return;
            if (JSON.stringify(obj[properties[it]]) == JSON.stringify(allObj) || obj[properties[it]] == 'Все'){
                delete obj[properties[it]];
            } else{
                var prop = obj[properties[it]];
                if (typeof prop === 'object')
                    obj[properties[it]] = prop.id;
            }
        }
    }
}