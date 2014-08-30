var express    = require('express');    // call express
var app        = express();         // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

var port = process.env.PORT || 8080;    // set our port

var router = express.Router();        // get an instance of the express Router

router.get('/', function(req, res) {
  res.json({ up: true }); 
});

router.head('/', function(req, res) {
  res.status(200).end()
});

router.post('/service', function(req, res) {
  var body = {
    "content": {
        "data": null
    },
    "meta": {}
  }

  if (req.body && req.body.content && req.body.content.data) body.content.data = req.body.content.data;
  if (req.body && req.body.meta) body.meta = req.body.meta

  res.json(body); 
});

app.use('/', router);

app.listen(port);
console.log('Revisit app is active on port ' + port);