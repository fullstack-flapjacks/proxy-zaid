const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.use('/r/:id', express.static('public'));

app.listen(PORT, ()=>console.log('Proxy Server listening on PORT', PORT));


