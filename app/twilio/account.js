// Twilio Credentials 
var accountSid = 'AC9c46405ec244abe2014d13d37bcdaa9d'; 
var authToken = 'e9f585b39ac4cdbeee751fd11e72163e'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

module.exports = {
    createSubAccount: function(){
        console.log('CREATING SUB ACCOUNT');
        return client.accounts.create({
            friendlyName: 'schoolName'
        });
    },
    FindLocalPhoneNumbers: function(){
        console.log('Searching for local numbers');
        
        //hardcoded country
        var country = "US";
        //hardcoded area code
        var areaCode = "352";
                
        return client.availablePhoneNumbers(country).local.list({areaCode: areaCode, voiceEnabled: "true", smsEnabled: "true"});
    },
    BuyLocalPhoneNumber: function(schoolID, phoneNumber){
        console.log('Buying local phone number');
        return client.incomingPhoneNumbers.creat({
            friendlyName: schoolID, 
            voiceUrl:"http://welcome.capreaTechnica.com/docs/voice.xml",
            phoneNumber: phoneNumber,
            voiceMethod: "GET"
        });
    }
    
};

