/**
 * Show a button
 *
 * Docs:
 *   https://developers.coinbase.com/api#show-a-button
 * Lib:
 *   Account.prototype.getButton
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/model/Account.js
 */

var async   = require('async');
var client  = require('../../client.js');
var Account = require('coinbase').model.Account;


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

    // Or, to manually specify an account ID
    // var myAccount = new Account(client, {'id': 'A1234'});

    var args = {
      name: 'test',
      type: 'buy_now',
      subscription: false,
      price_string: '1.23',
      price_currency_iso: 'USD',
      custom: 'Order123',
      callback_url: 'http://www.example.com/my_custom_button_callback',
      description: 'Sample description',
      style: 'custom_large',
      include_email: true
    };

    myAccount.createButton(args, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        callback(null, myAccount, result.code);
      }
    });

  }, function(myAccount, buttonCode) {

    // Or to manually specify an button code
    // var buttonCode = '';

    myAccount.getButton(buttonCode, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  }
]);