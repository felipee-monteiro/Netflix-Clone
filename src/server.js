const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

nunjucks.configure('src/views', {
    noCache: true,
    express: app
})

app.use('/', require('../src/routes'));

app.listen(5000);