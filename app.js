const express = require( 'express' );
const app = express();
const port = 3000;

app.use('/ha/',function (req, res, next) {
  console.log(req.url,req.method,res.statusCode)
  next()
});

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/ha/bu/', (req, res) => res.send('Bye World!'));


app.listen(port,()=>console.log('server listening'))