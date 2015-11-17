/**
 * List orders
 */

var client = require('../../../client.js');
var async  = require('async');


async.waterfall([
  function(callback) {

    // Create an order so we have one to view
    var args = {
      amount: '10.00',
      currency: 'USD',
      name: 'Order #123',
      description: 'Sample order',
      metadata: {
        customer_id: 'id_1005',
        customer_name: 'Satoshi Nakamoto'
      }
    };

    client.createOrder(args, function(err, order) {
      if (err) {
        return callback(err);
      }

      console.log('Created order ID:', order.id);
      callback(null);
    });

  }, function() {
    client.getOrders({}, function(err, orders) {
      if (err) {
        return console.log(err);
      }

      console.log(orders);
    });
  }
]);