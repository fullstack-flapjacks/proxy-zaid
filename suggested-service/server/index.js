const express = require('express');
const app = express();
const router = require('./routes.js');

app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));
app.use('/r', router);

let port = 6001;

app.listen(port, function() {
  console.log('listening on port ' + port);
});