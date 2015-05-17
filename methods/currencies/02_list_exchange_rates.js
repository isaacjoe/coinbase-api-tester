/**
 * List exchange rates between BTC and other currencies
 *
 * Docs:
 *   https://developers.coinbase.com/api#list-exchange-rates-between-btc-and-other-currencies
 * Lib:
 *   Account.prototype.getExchangeRates
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var async   = require('async');
var client  = require('../../client.js');


client.getExchangeRates(function(err, exchangeRates) {
  if (err) {
    console.log(err);
  } else {
    console.log(exchangeRates);
  }
});