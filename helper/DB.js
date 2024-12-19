const mongoose = require('mongoose');

const db = () => {

    mongoose.connect("mongodb://0.0.0.0:27017/", )
        .then(() => console.log('DB now is connected'))
        .catch((err) => { console.error('Could not connect to MongoDB', err); });
};

module.exports = { db };