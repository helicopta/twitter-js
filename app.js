const express = require( 'express' );
const nunjucks = require( 'nunjucks');
const app = express();
const routes = require('./routes');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

const port = 3000;

// app.use('/ha/',function (req, res, next) {
//   console.log(req.url,req.method,res.statusCode)
//   next()
// });

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.use( '/', routes(io) );
app.use(express.static('public'))


nunjucks.configure('views',{noCache: true});
//nunjucks.render('index.html', locals);


var server = app.listen(port,()=>console.log('server listening'));
var io = socketio.listen(server);