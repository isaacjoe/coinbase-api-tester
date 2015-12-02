/**
 * Show authorization information
 */

 var async  = require('async');
 var client = require('../../../client.js');
 var User   = require('coinbase').model.User;


 async.waterfall([
   function(callback) {
     // Get current user object
     client.getCurrentUser(function(err, user) {
       if (err) {
         return console.log(err);
       }

       callback(null, user);
     });
   },
   function(userObj, callback) {
     var user = new User(client, userObj);

     user.showAuth(function(err, authInfo) {
       if (err) {
         return console.log(err);
       }

       console.log(authInfo);
     });
   },
 ]);