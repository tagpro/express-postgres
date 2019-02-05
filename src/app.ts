var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

import users from './routes/users';
import bookshelf from './models/db';

var app = express();

// Connect database


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// List APIs
app.use('/api/v1/users', users);

// module.exports = app;
export default app;
