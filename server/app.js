const express = require('express');
const path = require('path');
const storyapi = require('./storyapi');
const db = require('../database');

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.use('/story', storyapi);

module.exports = app;
