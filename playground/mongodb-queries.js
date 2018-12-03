const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// let id = '5c04f0e063958359f023f29f';

// if(!ObjectId.isValid(id)){
//     console.log('ID not valid');
// }
// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo',todo);
// });

// Todo.findById({
//     _id:id
// }).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By id',todo);
// });

let id = '5c0498a301324510684d8cc8';

User.findById({
    _id:id
}).then((user)=>{
    if(!user){
        return console.log('User not found');
    }
    console.log('User by id',user);
},(e)=>{
    console.log(e);
});