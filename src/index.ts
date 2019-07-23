#!/usr/bin/env node

/**
 * Module dependencies.
 */


import app from "./app";

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);