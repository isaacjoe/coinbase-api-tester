/**
 * Get currencies
 */

var client = require('../../../client.js');


client.getCurrencies(function(err, currencies) {
  if (err) {
    return console.log(err);
  }

  console.log(currencies);
});