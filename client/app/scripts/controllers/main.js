'use strict';

var app = angular.module('futebasApp');

app.controller('MainController', function($scope, Modal, Jogador) {
	$scope.jogadores = Jogador.query();
	$scope.nomejogador = $scope.jogadores[0];
	$scope.returnPesquisaAvancada = function(criterios) {
		$scope.criterios = criterios;
	};

	$scope.retornarCriterios = function() {
		return $scope.criterios;
	};

	$scope.add = function() {
		Modal.open(
			'views/cadastrar-jogador.html',
			'CadastroJogadorCtrl',
			'lg',
			{
				criterios: $scope.retornarCriterios()
			},
			$scope.returnPesquisaAvancada(),
			console.log($scope.criterios)
		);
	};

	console.log($scope.criterios);
});
