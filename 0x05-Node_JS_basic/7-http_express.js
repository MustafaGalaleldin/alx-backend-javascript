const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const dbPath = process.argv[2];
    countStudents(dbPath).then(() => {
        res.send('This is the list of our students');
    }).catch((err) => {
        res.status(500).send(err.message);
    });
});

app.listen(1245);

module.exports = app;
