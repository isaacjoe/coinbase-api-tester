/**
 * Get buy price
 */

var client = require('../../../client.js');


client.getBuyPrice({currency: 'USD'}, function(err, price) {
  if (err) {
    return console.log(err);
  }

  console.log(price);
});