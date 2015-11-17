/**
 * Create account
 */

var client = require('../../../client.js');


var args = {
  name: 'Savings Wallet'
};

client.createAccount(args, function(err, response) {
  if (err) {
    return console.log(err);
  }

  console.log(response);
});