var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
    var idParam = req.params.id;

    if (ObjectID.isValid(idParam))
    {
        Todo.findById(idParam).then((todo) => {
            if (todo)
            {
                res.send({todo});
            }
            else
            {
                res.status(404).send();
            }
        }).catch((e) => {
            res.status(400).send();
        });
    }
    else
    {
        res.status(404).send();
    }
    // X Validate ID using isValid()
        // X Respond with 404 if not valid - send back empty body
    // Query database using findById
        // Success - send it back if there is one, if not send back 404 with empty body
        // Error - send back 400, send back empty body

    
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};