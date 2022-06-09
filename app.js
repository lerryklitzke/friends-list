const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const db = require('./routes/db');
const index = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(index.router);
app.use(db);

app.listen(3000);