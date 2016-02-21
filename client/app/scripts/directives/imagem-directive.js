'use strict';

var app = angular.module('futebasApp');

app.directive('imagemDirective', function(Modal) {
	return {
		restrict: 'E',
		require: '^form',
		scope: {
			futLabel: '@',
            futSrc: '@',
            futObject: '=',
			futNumero: '@',
			futPosicao: '@',
			functionAdd: '='
		},
		replace: true,
		template:
			'<div class="thumbnail painelInscricao">\
				<img alt="100%x200" ng-show="futObject" src="{{futSrc}}" data-holder-rendered="true" style="border-radius: 10px; height: 200px; width: 100%; display: block;">\
				<img alt="100%x200" ng-show="!futObject" src="images/disponivel.png" data-holder-rendered="true" style="border-radius: 10px; opacity: 0.4; height: 200px; width: 100%; display: block;">\
				<div class="caption">\
					<h3 style="text-align: center">{{futLabel}}</h3>\
					<p style="text-align: center" ng-show="!futObject"><span style="color: green">Disponível</span></p>\
					<p style="text-align: center" ng-show="futObject"><span style="font-weight: bold">{{futObject.nome}}</span></p>\
					<p style="text-align: center">\
						<a ng-show="!futObject" ng-disabled="futObject" style="width: 100%;" ng-click="add(futPosicao, futNumero)" class="btn btn-success" role="button">Inscrever-se</a>\
						<a ng-show="futObject" ng-disabled="futObject" style="width: 100%;" class="btn btn-danger" role="button">Vaga Preenchida</a>\
					</p>\
				</div>\
			</div>',
		link: function(scope, element, attrs, formCtrl) {
			scope.form = formCtrl;
			scope.add = function(posicao, numero) {
				if (scope.futObject) {
					return;
				}
				scope.functionAdd(posicao, parseInt(numero));
			}
		}
	};
});