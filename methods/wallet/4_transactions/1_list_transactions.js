/**
 * List transactions
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

      // For testing, console log the account
      console.log(accounts[0]);

      callback(null, accounts[0]);
    });
  }, function(sampleAccount, callback) {

    var myAccount = new Account(client, sampleAccount);
    // Alternatively, you can manually specify an account ID if needed
    // var myAccount = new Account(client, {'id': 'A1234'});

    // For testing, console log the account ID (UUID)
    console.log(myAccount.id);

    myAccount.getTransactions({}, function(err, txs) {
      if (err) {
        return console.log(err);
      }

      console.log('txs:');
      console.log(txs);
    });
  }
]);