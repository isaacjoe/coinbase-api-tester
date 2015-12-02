/**
 * Show a user
 */

var client = require('../../../client.js');


// Enter a valid user ID
var userId = '9da7a204-544e-5fd1-9a12-61176c5d4cd8';

client.getUser(userId, function(err, user) {
  if (err) {
    return console.log(err);
  }

  console.log(user);
});