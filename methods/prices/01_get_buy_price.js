/**
 * Get the buy price for bitcoin
 *
 * Docs:
 *   https://developers.coinbase.com/api#get-the-buy-price-for-bitcoin
 * Lib:
 *   Account.prototype.getBuyPrice
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var client = require('../../client.js');


var args = {
  qty: 1,
  currency: 'USD'
};

client.getBuyPrice(args, function(err, price) {
  if (err) {
    console.log(err);
  } else {
    console.log(price);
  }
});