 // Twilio Credentials 
var accountSid = 'AC9c46405ec244abe2014d13d37bcdaa9d'; 
var authToken = 'e9f585b39ac4cdbeee751fd11e72163e'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

module.exports = {
    GetSMS: function(){
        console.log("Dash");
        
        //gets SMS over the past 60 days
        client.usage.records.get({
            Category: 'sms',
            StartDate:'-60days'
        }, function(err, data) {
            console.log(data);
            /*data.usage_records.forEach(function(record) {
                console.log(record.price); 
            });*/
        });
        
        //Get last month's SMS usage
        /*client.usage.records.list({category:"sms"},function(err, data) {
            data.usage_records.forEach(function(record) {
                console.log(record.count);
            });
        });*/
        
        /*//Get total SMS (in and out) for so far this month
        var countPerDay = [1];
        var date = new Date();
        var year = date.getFullYear() +"-";
        var month = date.getMonth();
        month = month+1;
        month = (month < 10) ? ("0" + month) : month;
        var day = date.getDate();
        day = (day < 10) ? ("0" + day) : day;
        client.usage.records.daily.list({ category: "sms",
            startDate:year + month +"-01",
            endDate: year + month+"-" + day}, function(err, data) {
            console.log( year + month +"-"+ day);
            data.usage_records.forEach(function(record) {
                console.log(record.count);
                console.log(countPerDay.push(record.count));
            });  
        });
        console.log(countPerDay);
        return countPerDay*/
    },
    GetThisMonthTotalSMS: function(){
        //Get inbound SMS for so far this month
        var usage = "";
        var date = new Date();
        var year = date.getFullYear() +"-";
        var month = date.getMonth();
        month = month+1;
        month = (month < 10) ? ("0" + month) : month;
        var day = date.getDate();
        day = (day < 10) ? ("0" + day) : day;
        client.usage.records.daily.list({ category: "sms",
            startDate:year + month +"-01",
            endDate: year + month+"-" + day}, function(err, data) {
            console.log( year + month +"-"+ day);
            data.usage_records.forEach(function GetMonthlyTotalSMS(record) {
                usage = usage + ","+ record.count;
                console.log(record.count);
                console.log("Data: " + usage);
            });
            //Callback Hell!
            return usage;
            //console.log("Usage: "+ usage);
        })
    },
    
    //This is working!
    GetThisMonthTotalCalls: function(){
        //Get inbound SMS for so far this month
        var date = new Date();
        var year = date.getFullYear() +"-";
        var month = date.getMonth();
        month = month+1;
        month = (month < 10) ? ("0" + month) : month;
        var day = date.getDate();
        day = (day < 10) ? ("0" + day) : day;
        return client.usage.records.daily.list({ category: "calls",
            startDate:year + month +"-01",
            endDate: year + month+"-" + day});
        
    },
    //good and works
//    GetThisMonthTotalCalls: function(){
//        //Get inbound SMS for so far this month
//        var date = new Date();
//        var year = date.getFullYear() +"-";
//        var month = date.getMonth();
//        month = month+1;
//        month = (month < 10) ? ("0" + month) : month;
//        var day = date.getDate();
//        day = (day < 10) ? ("0" + day) : day;
//        client.usage.records.daily.list({ category: "calls",
//            startDate:year + month +"-01",
//            endDate: year + month+"-" + day}, function(err, data) {
//            console.log( year + month +"-"+ day);
//            data.usage_records.forEach(function(record) {
//                console.log(record.count);
//            });
//        });
//    },
    
    GetThisMonthInSMS: function(){
        //Get inbound SMS for so far this month
        var date = new Date();
        var year = date.getFullYear() +"-";
        var month = date.getMonth();
        month = month+1;
        month = (month < 10) ? ("0" + month) : month;
        var day = date.getDate();
        day = (day < 10) ? ("0" + day) : day;
        client.usage.records.daily.list({ category: "sms-inbound",
            startDate:year + month +"-01",
            endDate: year + month+"-" + day}, function(err, data) {
            console.log( year + month +"-"+ day);
            data.usage_records.forEach(function(record) {
                console.log(record.count);
            });
        });
    },
    
    GetLastMonthInSMS: function(){
        console.log("Dash");

        //Get inbound SMS for last month
        var date = new Date();
        var year = date.getFullYear() +"-";
        var month = date.getMonth();
        month = month+1;
        month = (month < 10) ? ("0" + month) : month;
        var day = date.getDate();
        day = (day < 10) ? ("0" + day) : day;
        
        var err, data;
        client.usage.records.lastMonth.list({category:"sms-inbound"}).then(function(resolve, reject){GetUsageRecords(resolve, reject)});
    },
    
    GetThisMonthInCalls: function(){
        console.log("Dash");

        //Get inbound SMS for so far this month
        var date = new Date();
        var year = date.getFullYear() +"-";
        var month = date.getMonth();
        month = month+1;
        month = (month < 10) ? ("0" + month) : month;
        var day = date.getDate();
        day = (day < 10) ? ("0" + day) : day;
        client.usage.records.daily.list({ category: "calls-inbound",
            startDate:year + month +"-01",
            endDate: year + month+"-" + day}, function(err, data) {
            console.log( year + month +"-"+ day);
            data.usage_records.forEach(function(record) {
                console.log(record.count);
            });
        });
    },
    
    GetLastMonthInCalls: function(){
        console.log("Dash");

        //Get inbound SMS for last month
        var date = new Date();
        var year = date.getFullYear() +"-";
        var month = date.getMonth();
        month = month+1;
        month = (month < 10) ? ("0" + month) : month;
        var day = date.getDate();
        day = (day < 10) ? ("0" + day) : day;
        client.usage.records.lastMonth.list({ category: "calls-inbound"}, function(err, data) {
            data.usage_records.forEach(function(record) {
                console.log(record.count);
            });
        });
    },
    
    GetUsageRecords: function(data){
        var dataset = [];
        data.usage_records.forEach(function(record) {
                    dataset.push(record.count);
                });
        return dataset;
    }
    
};

function GetUsageRecords(data){
    var dataset = [];
    data.usage_records.forEach(function(record) {
                dataset.push(record.count);
            });
    return dataset;
};