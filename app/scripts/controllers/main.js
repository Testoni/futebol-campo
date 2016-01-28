'use strict';

var app = angular.module('futebasApp');

app.controller('MainController', function($scope, Modal) {

	$scope.returnPesquisaAvancada = function(criterios) {
		$scope.criterios = criterios;
	};

	$scope.retornarCriterios = function() {
		return $scope.criterios;
	}

	$scope.add = function(tipo) {
		Modal.open(
			'views/cadastrar-jogador.html',
			'CadastroJogadorCtrl',
			'lg',
			{
				criterios: $scope.retornarCriterios()
			},
			$scope.returnPesquisaAvancada
		);
	};
});
