const mongoose = require('mongoose');

function MongoDB(url){
    return mongoose.connect(url);
}

module.exports = {MongoDB}