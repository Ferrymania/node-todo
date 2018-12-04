const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=>{
    console.log(result);
});

Todo.findOneAndRemove({_id:'5c0525ad061b4875e4ace173'}).then((todo)=>{

});

Todo.findByIdAndRemove('5c0525ad061b4875e4ace173').then((todo)=>{
    console.log(todo);
});