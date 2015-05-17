/**
 * Create a multisig account
 *
 * Docs:
 *   https://developers.coinbase.com/api#create-a-multisig-account
 * Lib:
 *   Client.prototype.createAccount
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var client = require('../../client.js');


var args = {
  name: 'Multisig Wallet',
  type: 'multisig',
  m: 2,
  xpubkeys: [
    'xpub661MyMwAqRbcFo8WEPnst2sE8MTLe9DszR7eYhtkVuiUskpAggETvYQeSBWTuwoxZrZvf18w75AzfjLhzihWGagvcMa4J9nDWjmiD2UrAEF',
    'xpub661MyMwAqRbcEezXDATCwfxbet7ZYA8cyfh2FDckA85S5Tg5NjzjnPeikzJgj2noBvxTEPNkMwq8RMCuBhiL7sRv29ZtMft2KbKwTcc48uu',
    'xpub661MyMwAqRbcEnKbXcCqD2GT1di5zQxVqoHPAgHNe8dv5JP8gWmDproS6kFHJnLZd23tWevhdn4urGJ6b264DfTGKr8zjmYDjyDTi9U7iyT'
  ]
};

client.createAccount(args, function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});