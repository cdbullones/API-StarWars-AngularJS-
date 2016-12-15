angular
    .module('apiApp', [])
    .controller('apiAppCtrl', ['$http', controladorPrincipal]);

function controladorPrincipal($http) {
    var vm = this;
    vm.url = 'Seleccione';

    vm.buscarData = function () {
        if (vm.url == 'Seleccione') {
            vm.fuerzas = '';
        } else {
            $http.get(vm.url).success(function (response) {
                //console.log("res:", respuesta);
                vm.fuerzas = response.results;
            });
        };
    }
}
