/**
 * Get time
 */

var client = require('../../../client');

client.getTime(function(err, time) {
  if (err) {
    return console.log(err);
  }

  console.log(time);
});