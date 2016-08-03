//API routes etc.
// app/routes.js 

// grab the db nerd model we just created
var twilioUsage = require('./twilio/usage.js');
var twilioAccounts = require('./twilio/account.js');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        
        //DEV_NOTES: None of the app.post calls will work.  They are not coded properly.
        
        
        //Usage Records
        app.get('/api/usage/sms', function(){twilioUsage.GetThisMonthTotalSMS();});
        app.get('/api/usage/test', function(){twilioUsage.GetSMS();});
        app.get('/api/usage/voice', function(req, res){
            //Render the TwiML document using "toString"
            res.writeHead(200, {
                    'Content-Type':'text/xml'
                });
            var promise = twilioUsage.GetThisMonthTotalCalls();
            //twilioUsage.GetThisMonthTotalCalls();
            promise.then(function(dataSet){
                var data = twilioUsage.GetUsageRecords(dataSet);
                console.log('THEN...' + data);
                res.write(JSON.stringify(data), JSON);
                res.end();
            });

        });
        
        app.post('/api/account/createSubAccount', function(req, res){
            res.writeHead(200,{
                'Content-Type':'text/xml'
            });
            console.log('calling sub account');
            var promise = twilioAccounts.createSubAccount();
            promise.then(function(result){
                console.log('Promised... '+ result.sid);
                //Save SID to DB
                res.write(result.sid);
                res.end();
            });
        });
        
        app.get('/api/account/FindLocalPhoneNumbers', function(req, res){
            res.writeHead(200, {
                'Content-Type':'text/xml'
            });
            console.log('calling FindLocalPhoneNumbers');
            var promise = twilioAccounts.FindLocalPhoneNumber();
            promise.then(function(result){
                console.log('FindLocalPhoneNumbers: Promised Result');
                console.log(result.availablePhoneNumbers);
                
                res.write(result.availablePhoneNumbers);
                res.end;
            })
        });
        
        app.post('/api/account/BuyLocalPhoneNumber', function(req, res){
            res.writeHead(200, {
                'Content-Type':'text/xml'
            });
            console.log('calling BuyLocalPhoneNumber');
            var promise = twilioAccounts.BuyLocalPhoneNumber(req.schoolID, req.phoneNumber);
            promise.then(function(result){
                console.log('FindLocalPhoneNumbers: Promised Result');
                console.log(result.sid);
                
                res.write(result.availablePhoneNumbers);
                res.end;
            })
        });
        
        // authentication routes

        // sample api route
//        app.get('/api/nerds', function(req, res) {
//            // use mongoose to get all nerds in the database
//            Nerd.find(function(err, nerds) {
//
//                // if there is an error retrieving, send the error. 
//                                // nothing after res.send(err) will execute
//                if (err)
//                    res.send(err);
//
//                res.json(nerds); // return all nerds in JSON format
//            });
//        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };
