/**
 * Sell bitcoin
 *
 * Docs:
 *   https://developers.coinbase.com/api#sell
 * Lib:
 *   Accounts.prototype.sell
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/model/Account.js
 */

var client = require('../../client.js');
var Account = require('coinbase').model.Account;
var async  = require('async');


async.waterfall([
  function(callback){
    // Fetch an account ID
    client.getAccounts(function(err, accounts){
      if (err) {
        console.log(err);
      } else {
        callback(null, accounts[0].id);
      }
    });
  }, function(accountId, callback) {

    // Optionally, you can manually specify an account ID here if needed
    // var accountId = '';

    var myAccount = new Account(client, {id: accountId});

    var args = {
      qty: 1,
      currency: 'USD'
    };

    // Create a sell order
    myAccount.sell(args, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  }
]);