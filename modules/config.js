module.exports = function () {

    var express = require('express');
    var constants = require('./constants');
    var path = require('path');
    var app = express();

    app.use(express.static('./public'));

    app.set('view engine', 'jade');
    app.set('views', './views');

    var blogRouter = require('../routes/blogRouter');
    app.use('/blog', blogRouter);

    app.get('/', function (req, res) {
        res.render('main');
    });

    app.listen(constants.SERVER_PORT, function(){
        console.log('SERVER LISTENING PORT ' + constants.SERVER_PORT);
    });
}