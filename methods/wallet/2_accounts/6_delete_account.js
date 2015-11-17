/**
 * Delete account
 */

var async   = require('async');
var Account = require('coinbase').model.Account;
var client  = require('../../../client.js');


async.waterfall([
  function(callback) {
    // Fetch an account
    client.getAccounts({}, function(err, accounts) {
      if (err) {
        return console.log(err);
      }

      // Set this to a non-primary account because cannot delete primary acct
      callback(null, accounts[2]);
    });
  }, function(sampleAccount, callback) {

    var myAccount = new Account(client, sampleAccount);

    // To manually specify an account ID
    // var myAccount = new Account(client, {'id': 'A1234'});

    myAccount.delete(function(err, result) {
      if (err) {
        return console.log(err);
      }

      console.log(result);
    });
  }
]);