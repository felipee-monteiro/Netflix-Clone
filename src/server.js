const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

nunjucks.configure('src/views', {
    noCache: true,
    express: app
})

app.use('/', require('../src/routes'));

<<<<<<< HEAD
app.listen(process.env.PORT || 5000);
=======
app.listen(process.env.PORT || 5000);
>>>>>>> 1771ecfe06311d7df584451f787894f2b4a61c32
