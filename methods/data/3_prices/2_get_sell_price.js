/**
 * Get sell price
 */

var client = require('../../../client.js');


client.getSellPrice({currency: 'USD'}, function(err, price) {
  if (err) {
    return console.log(err);
  }

  console.log(price);
});