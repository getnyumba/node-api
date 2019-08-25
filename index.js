const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind('Connection error:'));

const port = process.env.PORT

const app = express();

app.get('/', (req, res) => {
    res.send('Hello House Hunters!')
})

app.listen(port, () => {
    console.log('GetNyumba Inc. on port: ' + port)
})
