/**
 * Show payment method
 */

var client = require('../../../client.js');
var async  = require('async');


async.waterfall([
  function(callback){
    client.getPaymentMethods({}, function(err, paymentMethods) {
      if (err) {
        return console.log(err);
      }

      callback(null, paymentMethods[0].id);
    });
  }, function(paymentId, callback) {

    // Optionally, you can manually specify a payment method ID here if needed
    // var paymentId = '';

    client.getPaymentMethod(paymentId, function(err, paymentMethod) {
      if (err) {
        return console.log(err);
      }

      console.log(paymentMethod);
    });
  }
]);