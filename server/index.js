const express = require('express');
const app = express();
const path = require('path');
const request = require('request');
const router = express.Router();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/r/:id', express.static('public'));

const reservations = function(req, res){
  request(`http://reservations:2003/${req.url}`,  (error, response, body) => res.send(body));
}

const reservationsRequest = function(req, res){
  request(`http://reservations:2003${req.url}`,  (error, response, body) => {
    console.log('here is content type', response.headers['content-type']);
    console.log('here is the URL ', `http://reservations:2003${req.url}`);
    if(response.headers['content-type'].includes('application/json')){
      res.send(JSON.parse(body));
    } else {
      res.send(body);
    }
  });
}

const about = function(req, res){
  request(`http://about:1128/r/15/${req.url}`,  (error, response, body) => res.send(body));
}

const aboutRequest = function(req, res){
  request(`http://about:1128${req.url}`,  (error, response, body) => {
    if(response.headers['content-type'].includes('application/json')){
      res.send(JSON.parse(body));
    } else {
      res.send(body);
    }
  });
}


const menu = function(req, res){
  request(`http://menu:6600/r/15/${req.url}`,  (error, response, body) => res.send(body));
}  

const menuRequest = function(req, res){
  request(`http://menu:6600${req.url}`,  (error, response, body) => {
    if(response.headers['content-type'].includes('application/json')){
      res.send(JSON.parse(body));
    } else {
      res.send(body);
    }
  });
}



const suggested = function(req, res){
  request(`http://suggested:6001/r/15/${req.url}`,  (error, response, body) => res.send(body));
}

const suggestedRequest = function(req, res){
  request(`http://suggested:6001${req.url}`,  (error, response, body) => {
    if(response.headers['content-type'].includes('application/json')){
      res.send(JSON.parse(body));
    } else {
      res.send(body);
    }
  });
}


app.use('/r/:id/reservationsSTATIC', reservations);
app.use('/reservations', reservationsRequest);

app.use('/r/:id/aboutSTATIC', about);
app.use('/about', aboutRequest);

app.use('/r/:id/menuSTATIC', menu);
app.use('/menu', menuRequest);

app.use('/r/:id/suggestedSTATIC', suggested);
app.use('/suggested', suggestedRequest);


app.listen(PORT, ()=>console.log('Proxy Server listening on PORT', PORT));


