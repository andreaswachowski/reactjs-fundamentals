var axios = require('axios');

var clientId = 'YOUR_CLENT_ID';
var secret = 'YOUR_SECRET_ID';
var param = '?client_id=' + clientId + '&client_secret=' + secret;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      });
    }).catch(function(err) {
      console.warn('Error in getPlayersInfo', err);
    });
  }
};

module.exports = helpers;
