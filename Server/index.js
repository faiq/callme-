var express = require('express'), 
    app = express(),
    http = require('http'),
    bodyParser = require ('body-parser'),
    client = require('twilio')(), 
    logger = require('morgan'), 
    twilio = require('twilio');

app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(logger('dev')); 

// we are gonna replace this with the 
app.get("/", function (req, res) {
    client.calls.create({
        applicationSid: 'AP27e356e15ec45dc447f11eebb21d3eb5',
        to: "7326667797",
        from: "17322301288"
    }, function(err, call) {
        process.stdout.write(call.sid);
    });
    res.end("call should be going soon");
});

app.post('/tcall', function (req, res) {
    resp = new twilio.TwimlResponse();
    resp.say({voice:'woman'}, 'hello world!');
    res.writeHead(200, {
        'Content-Type':'text/xml'
    });
    res.end(resp.toString());
});
 
console.log("Magic happens on port 3000");
app.listen(3000);
