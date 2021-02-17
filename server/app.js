const express = require('express');
const path = require('path');
const storyapi = require('./api/story');
const promptapi = require('./api/prompt');
const db = require('../database');

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.use('/story', storyapi);
app.use('/prompt', promptapi);

module.exports = app;
