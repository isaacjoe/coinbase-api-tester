/**
 * Show an account
 */

var client = require('../../../client');
var async  = require('async');

async.waterfall([
  function(callback) {
    // Fetch accounts to get an account ID
    client.getAccounts({}, function(err, accounts) {
      if (err) {
        return console.log(err);
      }

      callback(null, accounts[0].id);
    });
  }, function(accountId, callback) {

    // Optionally, you can manually specify an account ID here if needed
    // var accountId = '';

    client.getAccount(accountId, function(err, account) {
      if (err) {
        return console.log(err);
      }

      console.log(account);
    });
  }
]);