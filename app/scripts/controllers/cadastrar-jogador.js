'use strict';

var portalApp = angular.module('futebasApp');

portalApp.controller('CadastroJogadorCtrl', function($scope, Modal, $modalInstance, criterios) {

	$scope.criterios = angular.copy(criterios);

	$scope.adicionarDocumentos = function() {
		$modalInstance.close();
	};

	$scope.cancelar = function() {
		$modalInstance.dismiss();
	};

});
