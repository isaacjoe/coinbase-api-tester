/**
 * Refund order
 */

var client = require('../../../client.js');
var Order  = require('coinbase').model.Order;


// Put the order ID to be refunded here
var data = {
  id: 'bce4f74a-87c2-5352-93cf-d177025d6e89'
};
var order = new Order(client, data);


var args = {
  currency: 'BTC',
  // mispayment: mispayment,         // optional
  // refund_address: refund_address, // optional
};

order.refund(args, function(err, result) {
  if (err) {
    return console.log(err);
  }

  console.log(result);
});