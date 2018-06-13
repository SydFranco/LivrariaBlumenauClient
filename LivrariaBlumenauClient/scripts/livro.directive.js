angular.module("LivrariaBlumenau").directive("awLivro", function () {
	return {
		restrict: "A",
		scope: {
			livro: '=awLivro',
			fnFechar: '&'
		},
		templateUrl: "./templates/livro.template.html",
		link: function (scope, element, attr) {

			if (!attr.fnFechar) {
				element.find('button').remove();
			}
		}
	};
})