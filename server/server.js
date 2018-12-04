let express = require('express');
let bodyParser = require('body-parser');
let {ObjectId} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    let todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id',(req,res)=>{
    let id = req.params.id;
    if(!ObjectId.isValid(id)){
        res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
        
    },(e)=>{
        res.status(400).send();
    });
});

app.delete('/todos/:id',(req,res)=>{
    let id = req.params.id;
    if(!ObjectId.isValid(id)){
        res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send(todo);
            
        
    },(e)=>{
        res.status(400).send();
    });
});
app.listen(port,()=>{
    console.log(`Started on port ${port}`)
});

module.exports = {app};





// let mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// // mongoose.Promise = Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

// let Todo = mongoose.model('Todo',{
//     text:{
//         type:String,
//         required:true,
//         minlength:1,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     },
//     completedAt:{
//         type:Number,
//         default:null
//     }
// });

// // let newTodo = new Todo({
// //     text: '   Somethings to do',
// // });

// // newTodo.save().then((doc)=>{
// //     console.log(JSON.stringify(doc,undefined,2));
// // },(e)=>{
// //     console.log('Unable to save todo');
// // });

// let User = mongoose.model('User',{
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         minlength:1
//     }
// });

// let user = new User({
//     email:'backtowind@qq.com'
// });

// user.save().then((doc)=>{
//     console.log('User saved',doc);
// },(e)=>{
//     console.log('Unable to save user',e);
// });