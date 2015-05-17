/**
 * List emails the user has previously used
 *
 * Docs:
 *   https://developers.coinbase.com/api#contacts
 * Lib:
 *   Account.prototype.getContacts
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var async   = require('async');
var client  = require('../../client.js');


client.getContacts(1, 25, null, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});