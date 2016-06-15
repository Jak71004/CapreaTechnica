 // Twilio Credentials 
var accountSid = 'AC9c46405ec244abe2014d13d37bcdaa9d'; 
var authToken = 'e9f585b39ac4cdbeee751fd11e72163e'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

module.exports = {
    GetUsageRecords: function(err, data) {
        console.log('hi');
//            data.usage_records.forEach(function(record) {
//                console.log(record.count);
//            });
        }
};
