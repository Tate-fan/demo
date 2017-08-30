'use strict';

/**
 * module dependencies
 */

const express = require('express');
const debug = require('debug')('ysp:app');
const morgan = require('morgan');
const {join} = require('path');
const pkg = require('../package.json');

const app = express();
const isDev = process.env.NODE_ENV === 'development';
if(isDev) app.use(express.static(join(__dirname, '../resource')));
app.use(morgan('combined'));
debug('current dir is: %s', __dirname);

app.get('/api/v1', (req, res) => {
  debug('Welcome to ysp api home: %s', req.url);
  return res.json({
    version: pkg.version,
    timestamp: new Date().getTime(),
    message: 'Welcome to YSP manager API'
  });
});

app.get('/api/v1/users', (req, res) => {
  return res.json({
    name: 'fyt',
    age: 19,
    address: 'henanxuchang'
  });
});


exports = module.exports = app;
