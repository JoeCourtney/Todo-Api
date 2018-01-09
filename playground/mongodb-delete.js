//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err)
    {
        return console.log('Unable to connect to MongoDB server', err);
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Joe'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5a5185f7f613a50980d6743f")}).then((result) => {
        console.log(result);
    });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    //db.close();
});