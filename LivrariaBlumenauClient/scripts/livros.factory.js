angular.module("LivrariaBlumenau").factory("Livros", function($q, $http){
	return {
		listar: function() {
			var promessa = $q.defer();

			$http.get("http://localhost:63761/api/v1/getLivros").then(
				function(result){
					var livros = [];

					angular.forEach(result.data, function(livro, id){
						livro.id = id;
						livros.push(livro);
					});

					promessa.resolve(livros);
				}
			);

			return promessa.promise;
		},
		inserir: function(livro) {
			var id = livro.id;
			delete livro.id;

			return $http.put("http://localhost:63761/api/v1/create/", livro);
		},
		atualizar: function (livro) {
		    var id = livro.id;

		    return $http.put("http://localhost:63761/api/v1/update/", livro);
		},
		remover: function(id) {
			return $http.post("http://localhost:63761/api/v1/delete/" + id);
		}
	};
});