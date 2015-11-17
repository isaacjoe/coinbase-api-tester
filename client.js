/**
 * Enter your Coinbase Sandbox API credentials below
 */

var Client = require('coinbase').Client;
var client = new Client({
    'apiKey': 'your-coinbase-sandbox-api-key',
    'apiSecret': 'your-coinbase-sandbox-api-secret',
    'baseApiUri': 'https://api.sandbox.coinbase.com/v2/',
});

module.exports = client;