/**
 * Show current user
 */

var client = require('../../../client.js');


client.getCurrentUser(function(err, user) {
  if (err) {
    return console.log(err);
  }

  console.log(user);
});