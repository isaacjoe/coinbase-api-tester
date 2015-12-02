/**
 * List checkouts orders
 */

var async    = require('async');
var client   = require('../../../client.js');
var Checkout = require('coinbase').model.Checkout;


async.waterfall([
  function(callback) {
    // Get a checkout to set up the example
    client.getCheckouts({}, function(err, checkouts) {
      if (err) {
        return console.log(err);
      }

      if (checkouts.length === 0) {
        return console.log('You do not have any checkouts created. Create one and then try again.');
      }

      callback(null, checkouts[0]);
    });
  },
  function(checkoutObj, callback) {
    var checkout = new Checkout(client, checkoutObj);

    checkout.getOrders({}, function(err, orders) {
      if (err) {
        return console.log(err);
      }

      console.log(orders);
    });
  },
]);