const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hr-mvp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log('Mongoose connected.'))
  .catch((err) => console.error.bind(console, 'connection error:'));

const db = mongoose.connection;

module.exports = db;
