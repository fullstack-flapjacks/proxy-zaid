const mongoose = require('mongoose'); // include DB object
const seed = require('./dataGenerator');
const models = require('./dbModels');

const mongoUrl = 'mongodb://database/restaurants'
//mongoose.connect('mongodb://database/restaurants');
//mongoose.connect('mongodb://localhost/restaurants');


var connectWithRetry = function() {
  return mongoose.connect(mongoUrl, function(err) {
    if (err) {
      console.error('Failed to connect to mongo on startup', err);
      //setTimeout(connectWithRetry, 10000);
    }
  });
};
connectWithRetry();

mongoose.connection.on('connected', ()=>{


  let Availability = models.availability;
  let Bookings = models.bookings;


  Availability.create(seed.availabilityData, (err, entries)=>{
    if (err){
      console.log('Error seeding restaurant availbility data', err);
      return;
    }
    console.log('Successfully seeded restaurant availability data', entries);
  });  

  Bookings.create(seed.bookingsData, (err, entries)=>{
    if (err){
      console.log('Error seeding bookings count data', err);
      return;
    }
    console.log('Successfully seeded bookings count data', entries);
  });


});



