/**
 * List accounts
 */

var client = require('../../../client');

client.getAccounts({}, function(err, accounts) {
  if (err) {
    return console.log(err);
  }

  accounts.forEach(function(acct) {
    console.log('my bal: ' + acct.balance.amount + ' for ' + acct.name);
  });
});