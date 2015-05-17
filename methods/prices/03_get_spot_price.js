/**
 * Get the spot price of bitcoin
 *
 * Docs:
 *   https://developers.coinbase.com/api#get-the-spot-price-of-bitcoin
 * Lib:
 *   Account.prototype.getSpotPrice
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var client = require('../../client.js');


var args = {
  qty: 1,
  currency: 'USD'
};

client.getSpotPrice(args, function(err, price) {
  if (err) {
    console.log(err);
  } else {
    console.log(price);
  }
});