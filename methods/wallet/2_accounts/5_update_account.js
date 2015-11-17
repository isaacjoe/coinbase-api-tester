/**
 * Update account
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

      callback(null, accounts[0]);
    });
  }, function(sampleAccount, callback) {

    var myAccount = new Account(client, sampleAccount);
    // Alternatively, you can manually specify an account ID if needed
    // var myAccount = new Account(client, {'id': 'A1234'});

    var args = {
     name: 'Satoshi Wallet'
    };

    myAccount.update(args, function(err, modifiedAcct) {
      if (err) {
        return console.log(err);
      }

      console.log(modifiedAcct);
    });
  }
]);