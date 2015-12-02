/**
 * Create checkout
 */

var client = require('../../../client.js');


// Many other optional parameters can be included
// See https://developers.coinbase.com/api/v2#create-checkout
var args = {
  amount: '10.00',
  currency: 'USD',
  name: 'Satoshi fan club membership'
};

client.createCheckout(args, function(err, checkout) {
  if (err) {
    return console.log(err);
  }

  console.log(checkout);
});