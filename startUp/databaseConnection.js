const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function () {
    mongoose.connect('mongodb://localhost/assignment-1', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => winston.info('connected to mongodb...'))
}