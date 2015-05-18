/**
 * Transfer money between accounts
 *
 * Docs:
 *   https://developers.coinbase.com/api#transfer-money-between-accounts
 * Lib:
 *   Client.prototype.transferMoney
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
        // Create an array of Bitcoin accounts
        var bitcoinAccounts = accounts.filter(function(account) {
          return account.balance.currency === 'BTC';
        });

        callback(null, bitcoinAccounts[0], bitcoinAccounts[1]);
      }
    });
  }, function(sampleAccount, toAccount, callback) {

    var myAccount = new Account(client, sampleAccount);
    // Alternatively, you can manually specify a 'from' account ID if needed
    // var myAccount = new Account(client, {id: 'A1234'});

    var args = {
      to: toAccount.id,
      amount: '0.1234',
      notes: 'Sample transfer for you'
    };

    // Alternatively, you can manually specify a 'to' account ID if needed
    // args.to = 'A1234';

    myAccount.transferMoney(args, function(err, transfer) {
      if (err) {
        console.log(err);
      } else {
        console.log(transfer);
      }
    });
  }
]);