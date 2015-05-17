/**
 * List currencies supported by Coinbase
 *
 * Docs:
 *   https://developers.coinbase.com/api#list-currencies-supported-by-coinbase
 * Lib:
 *   Account.prototype.getCurrencies
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var async   = require('async');
var client  = require('../../client.js');


client.getCurrencies(function(err, currencies) {
  if (err) {
    console.log(err);
  } else {
    console.log(currencies);
  }
});