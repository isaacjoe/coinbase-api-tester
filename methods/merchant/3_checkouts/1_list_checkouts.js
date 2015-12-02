/**
 * List checkouts
 */

var client = require('../../../client.js');


client.getCheckouts({}, function(err, checkouts) {
  if (err) {
    return console.log(err);
  }

  console.log(checkouts);
});