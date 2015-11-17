/**
 * Show order
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

  }, function(callback) {
    // Fetch orders to get an order ID
    client.getOrders({}, function(err, orders) {
      if (err) {
        callback(err);
      }

      callback(null, orders);
    });
  }, function(orders) {
    var orderId = orders[0].id;
    console.log('Fetching first order, Order ID:', orderId);

    client.getOrder(orderId, function(err, order) {
      if (err) {
        return console.log(err);
      }

      console.log('Fetched the order:');
      console.log(order);
    });
  }
]);