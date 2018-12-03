// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');
    // deleteMany
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //The only difference is that findOneAndDelete returns the deleted document while deleteOne deletes it and doesn't return it.

    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name:Ferrymania});

    db.collection('Users').findOneAndDelete({
        _id:new ObjectID('5bff8b748f0a874c181ad634')
    }).then((results)=>{
        console.log(JSON.stringify(results,undefined,2));
    });





  
    client.close();
});