var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// app user schema
const User = new Schema({
    name: String,
    username: String,
    password: String,
    phone: String,
    usertype: String, // buyer or seller
});

mongoose.model('User', User);

mongoose.connect('mongodb://localhost:27017/shoppingapp', { useNewUrlParser: true, useUnifiedTopology: true  }, function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to MongoDB !');
});
module.exports = mongoose;
