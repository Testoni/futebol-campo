'use strict';

var portalApp = angular.module('futebasApp');

portalApp.controller('CadastroJogadorCtrl', function($scope, Modal, $modalInstance, criterios, Jogador) {
	$scope.jogador = new Jogador();
	$scope.criterios = angular.copy(criterios);


	$scope.posicoes = [
      'Goleiro',
      'Zagueiro',
      'Atacante'];

	$scope.salvar = function() {
		$scope.jogador.$save(function(response){
			$scope.nomejogador = response;
		});


		$modalInstance.close();
	};

	$scope.cancelar = function() {
		$modalInstance.dismiss();
	};

});
