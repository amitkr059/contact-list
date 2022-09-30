// requiring the library
const mongoose = require('mongoose');
//connecting to the mongogb database

// connection gives access to the db
//acquire connection and check if successfull
const db = mongoose.connection;
mongoose.connect('mongodb://localhost/contact-list');
//error handling
db.on('error', console.error.bind(console, 'error connecting to db'));
//if no error, once connection is open for me to interact with db
db.once('open', function() {
    console.log("Successfully connected to the db");
});