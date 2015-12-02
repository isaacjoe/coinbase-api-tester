/**
 * Show a checkout
 */

var async  = require('async');
var client = require('../../../client.js');


async.waterfall([
  function(callback) {
    // Get a checkout ID to set up the example
    client.getCheckouts({}, function(err, checkouts) {
      if (err) {
        return console.log(err);
      }

      if (! checkouts.length) {
        return console.log('Yoo do not have any checkouts created. Create one and then try again.');
      }

      callback(null, checkouts[0].id);
    });


  },
  function(checkoutId, callback) {
    client.getCheckout(checkoutId, function(err, checkout) {
      if (err) {
        return console.log(err);
      }

      console.log(checkout);
    });
  },
]);