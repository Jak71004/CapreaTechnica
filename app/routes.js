//API routes etc.
// app/routes.js 

// grab the db nerd model we just created
var twilioUsage = require('./twilio/usage.js');
var twilioAccounts = require('./twilio/account.js');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        
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
        
        //Needs to be a POST
        app.get('/api/account/createSubAccount', function(req, res){
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
        
        app.get('/api/account/listPhoneNumbers', function(req, res){
            res.writeHead(200, {
                'Content-Type':'text/xml'
            });
            console.log('calling listPhoneNumbers');
            var promise = twilioAccounts.listPhoneNumbers();
            promise.then(function(result){
                console.log('listPhoneNumbers: Promised Result');
                //res.write(result.list);
                //res.end;
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
