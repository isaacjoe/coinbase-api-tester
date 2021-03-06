/**
 * List addresses
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
  }, function(sampleAccount, callback) {

    var myAccount = new Account(client, sampleAccount);
    console.log('Account ID:', myAccount.id);
    // To manually specify an account ID
    // var myAccount = new Account(client, {'id': 'A1234'});

    myAccount.getAddresses({}, function(err, addresses) {
      if (err) {
        return console.log(err);
      }

      addresses.forEach(function(address) {
        console.log('Address ID:', address.id);
        console.log('Address:', address.address);
      });
    });
  }
]);