'use strict';

var portalApp = angular.module('futebasApp');

portalApp.controller('CadastroJogadorCtrl', function($scope, Modal, $modalInstance, object, Jogador) {

	$scope.jogador = new Jogador();
	$scope.jogador.posicao = object.posicao;
	$scope.jogador.numero = object.numero;

	$scope.salvar = function(jogador) {
		jogador.$save(function(response){
			jogador = response;
		});
		$modalInstance.close(jogador);
	};

	$scope.cancelar = function() {
		$modalInstance.dismiss();
	};

});
