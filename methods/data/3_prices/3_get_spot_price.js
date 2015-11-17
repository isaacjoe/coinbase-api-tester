/**
 * Get spot price
 */

var client = require('../../../client.js');


client.getSpotPrice({currency: 'USD'}, function(err, price) {
  if (err) {
    return console.log(err);
  }

  console.log(price);
});