var axios = require('axios');

// var id = 'CLIENT ID'
// var sec = 'YOUR SECRET ID'
// var param = ''

function getUserInfo(username){
	return axios.get('https://api.github.com/users/' + username)
}

var helpers = {
	getPlayersInfo: function(players){
		return axios.all(players.map(function(username){
			return getUserInfo(username)
		})).then(function(info) {
			return info.map(function(user){
				return user.data;
			})
		}).catch(function(err){
			console.warn("Error: ", err)
		})

	}
};

module.exports = helpers;