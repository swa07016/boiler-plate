const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
const database = require('./database.json');
mongoose.connect(`mongodb+srv://${database.id}:${database.password}@boiler-plate-fttsk.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))  

app.get('/', (req, res) => res.send('hello world'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))