var express = require('express');
var app = express();

const say = require('say');

var jsonfile = require('jsonfile');
var file = 'jokes.json';
var allJokes = jsonfile.readFileSync(file);

say.speak('Hello, I am Connor Clark.  I was built by Connor Clark and his Daddy.  I am now online and operational!');

let talk = function(textToSay) {

    return new Promise(function(fulfill, reject) {
        let textToSpeak = decodeURI(textToSay);

        try {
            say.speak(textToSpeak);

            fulfill();
        }catch(err){
            reject(err);
        }
    });
};

var responses = {
    forward: {
        command: 'forward'
    },
    backward: {
        command: 'backward'
    },
    left: {
        command: 'left'
    },
    right: {
        command: 'right'
    }
};

app.use(express.static('public'));

app.get('/', function(req, res) {
    // We must end the request when we are done handling it
    app.sendFile('public/index.html');
    res.end();
});

let random = function(low, high) {
    return parseInt(Math.random() * (high - low) + low);
};

app.get('/callback', function(req, res) {
    res.end();
});

app.get('/joke', function(req, res) {
    let jokeID = random(0, allJokes.allJokes.length);

    talk(allJokes.allJokes[jokeID].joke.join('....'));

    res.json({
        status: 200
    });

    res.end();
});

app.get('/talk', function(req, res) {
    let talkResponse = talk(req.query.text);

    if(talkResponse != null) {
        res.json({
            status: 200
        });
    }else{
        res.json({
            status: 300,
            error: talkResponse
        });
    }

    res.end();
});

app.get('/forward', function(req, res) {
    // We must end the request when we are done handling it
    res.json(responses.forward);
    res.end();
});

app.get('/backward', function(req, res) {
    // We must end the request when we are done handling it
    res.json(responses.backward);
    res.end();
});

app.get('/left', function(req, res) {
    // We must end the request when we are done handling it
    res.json(responses.left);
    res.end();
});

app.get('/right', function(req, res) {
    // We must end the request when we are done handling it
    res.json(responses.right);
    res.end();
});

module.exports = app;