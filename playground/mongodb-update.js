// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5c00959209b49f5a1cab1a33')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id:new ObjectID('5bff8b748f0a874c181ad634')
    // },{
    //     $set :{
    //         name:'Tom'
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5bff8b748f0a874c181ad634')
    },{
        $inc : {
            age:3
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    })





  
    client.close();
});