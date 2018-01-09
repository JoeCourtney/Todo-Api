const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

var id = '5a5285275a5b0ca42b0e9142';

if (ObjectID.isValid(id))
{
    // Todo.find({
    //     _id: id
    // }).then((todos) => {
    //     console.log('Todos', todos);
    // });
    
    // Todo.findOne({
    //     _id: id
    // }).then((todo) => {
    //     console.log('Todo', todo);
    // });
    
    // Todo.findById(id).then((todo) => {
    //     if (!todo)
    //     {
    //         return console.log('Id not found');
    //     }
    //     console.log('Todo', todo);
    // }).catch((e) => {
    //     console.log(e);
    // });

    User.findById(id).then((user) => {
        if (!user)
        {
            return console.log('Id not found');
        }
        console.log('User', user);
    }).catch((e) => {
        console.log(e);
    });
}
else
{
    console.log('ID not valid');
}