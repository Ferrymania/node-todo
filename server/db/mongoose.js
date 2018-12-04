let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.Promise = Promise;

mongoose.connect( process.env.MONGODB_URI, { useNewUrlParser: true }).then(()=>{

});

module.exports = {mongoose};