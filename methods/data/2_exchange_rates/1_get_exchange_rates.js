/**
 * Get exchange rates
 */

var client = require('../../../client.js');


client.getExchangeRates({currency: 'BTC'}, function(err, exchangeRates) {
  if (err) {
    return console.log(err);
  }

  console.log(exchangeRates);
});