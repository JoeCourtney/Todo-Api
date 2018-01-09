const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove

Todo.findByIdAndRemove('5a541503dd01be04e47d076c').then((todo) => {
    console.log(todo);
});