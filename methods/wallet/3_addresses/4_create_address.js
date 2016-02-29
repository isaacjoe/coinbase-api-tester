/**
 * Create address
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

      callback(null, accounts[1]);
    });
  }, function(sampleAccount) {

    var myAccount = new Account(client, sampleAccount);
    // To manually specify an account ID
    // var myAccount = new Account(client, {'id': 'A1234'});

    myAccount.createAddress(null, function(err, address) {
      if (err) {
        return console.log(err);
      }

      console.log(address);
    });
  }
]);