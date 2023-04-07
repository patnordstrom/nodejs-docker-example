'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const os = require('os');

// App
const app = express();
app.get('/', (req, res) => {
  var currentTime = new Date();
  res.send('Response from ' + os.hostname() + ' at ' + currentTime + '\n');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});