let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.Promise = Promise;
let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://Ferrymania:mLab123@ds149268.mlab.com:49268/todoapp'
  };
mongoose.connect(db.localhost || db.mlab, { useNewUrlParser: true });

module.exports = {mongoose};