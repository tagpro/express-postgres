#!/usr/bin/env node

/**
 * Module dependencies.
 */


'use strict';

const app = require('./app');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);