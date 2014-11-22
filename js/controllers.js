angular.module('starter.controllers', ['myservices'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {})

.controller('FrontpgCtrl', function ($scope, $stateParams) {})

.controller('HomeCtrl', function ($scope, $stateParams) {})

.controller('EnquiryCtrl', function ($scope, $stateParams, MyServices) {
    var enqinsert = function (data, status) {
        console.log("on success");
        console.log(data);
    };

    $scope.enqsubmit = function (enq) {
        MyServices.enqsubmit(enq).success(enqinsert);
    }
})

.controller('TestdriveCtrl', function ($scope, $stateParams, MyServices) {
    var tdsubmitted = function (data, status) {
        console.log("on success");
        console.log(data);
    };

    $scope.tdsubmit = function (td) {
        MyServices.tdsubmit(td).success(tdsubmitted);
    }
})

.controller('ServiceappointmentCtrl', function ($scope, $stateParams, MyServices) {
    var sagiven = function (data, status) {
        console.log("on success");
        console.log(data);
    };

    $scope.sasubmit = function (sa) {
        MyServices.sasubmit(sa).success(sagiven);
    }
});