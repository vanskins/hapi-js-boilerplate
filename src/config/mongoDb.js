'use strict'

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', function(error) {
    console.log(error, 'error mongodb connection')
});
db.once('open', function() {
    console.log('mongodb connected')
});
