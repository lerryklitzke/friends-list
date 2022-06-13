const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');

const db = require('./routes/db');
const index = require('./routes/index');
const error = require('./routes/error');

const app = express();

app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/views')));

app.use(index);
app.use(db);
app.use(error);

app.listen(3000);