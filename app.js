const express = require( 'express' );
const nunjucks = require( 'nunjucks');
const app = express();
const routes = require('./routes');

const port = 3000;

// app.use('/ha/',function (req, res, next) {
//   console.log(req.url,req.method,res.statusCode)
//   next()
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.use('/', routes);



nunjucks.configure('views',{noCache: true});
//nunjucks.render('index.html', locals);


app.listen(port,()=>console.log('server listening'))