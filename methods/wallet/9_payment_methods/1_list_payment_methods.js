/**
 * List payment methods
 */

var client = require('../../../client.js');


client.getPaymentMethods({}, function(err, paymentMethods) {
  if (err) {
    return console.log(err);
  }

  console.log(paymentMethods);
});