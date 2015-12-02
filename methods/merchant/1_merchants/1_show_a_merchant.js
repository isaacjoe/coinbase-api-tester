/**
 * Show a merchant
 */

var client = require('../../../client.js');


var merchantId = 'c265757c-ec4d-561f-a293-6c44692e29bb';

client.getMerchant(merchantId, function(err, merchant) {
  if (err) {
    return console.log(err);
  }

  console.log(merchant);
});
