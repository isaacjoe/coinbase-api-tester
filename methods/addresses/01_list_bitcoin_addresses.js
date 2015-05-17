/**
 * List bitcoin addresses
 *
 * Docs:
 *   https://developers.coinbase.com/api#addresses
 * Lib:
 *   Account.prototype.getAddresses
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/model/Account.js
 */

var async   = require('async');
var Account = require('coinbase').model.Account;
var client  = require('../../client.js');


async.waterfall([
  function(callback) {
    // Fetch an account
    client.getAccounts(function(err, accounts) {
      if (err) {
        console.log(err);
      } else {
        callback(null, accounts[0]);
      }
    });
  }, function(sampleAccount, callback) {

    var myAccount = new Account(client, sampleAccount);
    // To manually specify an account ID
    // var myAccount = new Account(client, {'id': 'A1234'});

    myAccount.getAddresses(1, 25, null, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  }
]);