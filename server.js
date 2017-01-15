var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

var mongodbUri = 'mongodb://localhost:27017';
mongoose.connect(mongodbUri, { server: {auto_reconnect: true } });
require('./routes/user')(app);

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Server running on port ', app.get('port'));
});