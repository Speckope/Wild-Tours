const path = require('path');
const express = require('express');
const http = require('http');
const fs = require('fs');

const app = express();

const hostname = '127.0.0.1';
const port = 3001;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
