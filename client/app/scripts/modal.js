'use strict';

angular.module('futebasApp').controller('ConfirmationModalCtrl', function($scope, $modalInstance, message) {
    $scope.message = message;

    $scope.ok = function() {
        $modalInstance.close();
    };

    $scope.cancelar = function() {
        $modalInstance.dismiss();
    };
});

angular.module('futebasApp').factory('Modal', function($modal) {
    var modal = {};

    modal.confirmation = function(message, success, error) {
        var modInstance = $modal.open({
            animation: true,
            templateUrl: 'views/confirmation-modal.html',
            controller: 'ConfirmationModalCtrl',
            size: 'sm',
            keyboard: false,
            backdrop: 'static',
            resolve: {
                message: function() {
                    return message;
                }
            }
        });
        modInstance.result.then(success, error);
    };

    modal.open = function(template, controller, size, resolve, success, error) {
        var modInstance = $modal.open({
            animation: true,
            templateUrl: template,
            controller: controller,
            size: size,
            keyboard: false,
            backdrop: 'static',
            resolve: resolve
        });
        modInstance.result.then(success, error);
    };

    modal.zoom = function(template, controller, size, resolve, success, error) {
        var modInstance = $modal.open({
            animation: true,
            template: template,
            controller: controller,
            size: size,
            resolve: resolve
        });
        modInstance.result.then(success, error);
    };

    return modal;
});
