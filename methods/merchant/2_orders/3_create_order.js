/**
 * Create an order
 */

var client = require('../../../client.js');


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

// Create an order so we have one to view
client.createOrder(args, function(err, order) {
  if (err) {
    return console.log(err);
  }

  console.log(order);
});