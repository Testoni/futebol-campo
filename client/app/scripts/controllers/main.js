'use strict';

var app = angular.module('futebasApp');

app.controller('MainController', function($scope, Modal, Jogador) {

	$scope.gerarObjJogador = function(jogador) {
		if (jogador.numero === 1) {
			$scope.jogador1 = jogador;
		}
		if (jogador.numero === 2) {
			$scope.jogador2 = jogador;
		}
		if (jogador.numero === 3) {
			$scope.jogador3 = jogador;
		}
		if (jogador.numero === 4) {
			$scope.jogador4 = jogador;
		}
		if (jogador.numero === 5) {
			$scope.jogador5 = jogador;
		}
		if (jogador.numero === 6) {
			$scope.jogador6 = jogador;
		}
		if (jogador.numero === 7) {
			$scope.jogador7 = jogador;
		}
		if (jogador.numero === 8) {
			$scope.jogador8 = jogador;
		}
		if (jogador.numero === 9) {
			$scope.jogador9 = jogador;
		}
		if (jogador.numero === 10) {
			$scope.jogador10 = jogador;
		}
		if (jogador.numero === 11) {
			$scope.jogador11 = jogador;
		}
		if (jogador.numero === 12) {
			$scope.jogador12 = jogador;
		}
		if (jogador.numero === 13) {
			$scope.jogador13 = jogador;
		}
		if (jogador.numero === 14) {
			$scope.jogador14 = jogador;
		}
		if (jogador.numero === 15) {
			$scope.jogador15 = jogador;
		}
		if (jogador.numero === 16) {
			$scope.jogador16 = jogador;
		}
		if (jogador.numero === 17) {
			$scope.jogador17 = jogador;
		}
		if (jogador.numero === 18) {
			$scope.jogador18 = jogador;
		}
		if (jogador.numero === 19) {
			$scope.jogador19 = jogador;
		}
		if (jogador.numero === 20) {
			$scope.jogador20 = jogador;
		}
		if (jogador.numero === 21) {
			$scope.jogador21 = jogador;
		}
		if (jogador.numero === 22) {
			$scope.jogador22 = jogador;
		}
		if (jogador.numero === 23) {
			$scope.jogador23 = jogador;
		}
		if (jogador.numero === 24) {
			$scope.jogador24 = jogador;
		}
		if (jogador.numero === 25) {
			$scope.jogador25 = jogador;
		}
		if (jogador.numero === 26) {
			$scope.jogador26 = jogador;
		}
		if (jogador.numero === 27) {
			$scope.jogador27 = jogador;
		}
		if (jogador.numero === 28) {
			$scope.jogador28 = jogador;
		}
		if (jogador.numero === 29) {
			$scope.jogador29 = jogador;
		}
		if (jogador.numero === 30) {
			$scope.jogador30 = jogador;
		}
	};

	$scope.montarTime = function() {
		$scope.count = 0;
		Jogador.query({}, function(response) {
			for (var i in response) {
				$scope.count += $scope.count;
				$scope.gerarObjJogador(response[i]);
			}
		});
	};

	$scope.montarTime();

	$scope.getObject = function(posicao, numero) {
		var object = {};
		object.posicao = posicao;
		object.numero = numero;
		return object;
	};

	$scope.add = function(posicao, numero) {
		Modal.open(
			'views/cadastrar-jogador.html',
			'CadastroJogadorCtrl',
			'lg',
			{
				object: $scope.getObject(posicao, numero)
			},
			function(jogador) {
				$scope.gerarObjJogador(jogador);
			}
		);
	};
});
