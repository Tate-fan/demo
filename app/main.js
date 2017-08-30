'use strict';

/**
 * module dependencies
 */

const express = require('express');
const debug = require('debug')('main:app');
const morgan = require('morgan');
const pkg = require('../package.json');
const app = express();

app.use(morgan('combined'));


app.get('/api/v1', (req, res) => {
  return res.json({
    version: pkg.version,
    timestamp: new Date().getTime(),
    message: 'Welcome to YSP manager API'
  });
});


exports = module.exports = app;
