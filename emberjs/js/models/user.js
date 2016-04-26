(function () {
	'use strict';
	Todos.User = DS.Model.extend({});
	Todos.User.login = function(username, password) {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				if(username==="test" && password==="password")
					resolve(true);
				else{
					reject(false);
				}
			}, 1000);
		});
	};
	Todos.User.logout = function() {
		setTimeout(function () {
			return true;
		}, 1000);
	}
})();

