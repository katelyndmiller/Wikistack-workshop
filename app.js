const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const { db, Page, User } = require('./models');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send(layout(''));
});

const syncTables = async () => {
    await Page.sync();
    await User.sync();
    
    app.listen(3000, () => {
        console.log('Server listening!');
    });
}

syncTables();

