(function () {
	angular
	.module('LivrariaBlumenau')
	.controller('LivrosController', function ($scope, Livros) {
		$scope.titulo = "Livraria Blumenau";

		$scope.livros = [];

		var carregarLivros = function () {
			Livros.listar().then(function (livros) {
				$scope.livros = livros;
			});
		}

		$scope.novoLivro = {};

		$scope.criarLivro = function () {
			var novoLivro = {
				Nome: $scope.novoLivro.Nome,
				Autor: $scope.novoLivro.Autor,
				Ano: $scope.novoLivro.Ano,
				Editora: $scope.novoLivro.Editora,
				Descricao: $scope.novoLivro.Descricao,
				ISBN: $scope.novoLivro.ISBN
			};

            if (novoLivro.Id == 0)
                Livros.inserir(novoLivro).then(carregarLivros);
			else
                Livros.atualizar(novoLivro).then(carregarLivros);
		}

		$scope.removerLivro = function (id) {
			Livros.remover(id).then(carregarLivros);
		}

		carregarLivros();
	});
})();