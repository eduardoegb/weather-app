const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const { argv } = process;
const address = argv[2];

if (address) {
  geocode(address, (error, locationData) => {
    if (error) {
      return console.log('ERROR:', error);
    }
    forecast(locationData, (error, forecastData) =>{
      if (error) {
       return console.log('ERROR:', error);
      }
      console.log('LOCATION:', locationData.location);
      console.log('WEATHER:', forecastData.weather);
      console.log('TEMPERATURE:', forecastData.temperature + '° C');
      console.log('FEELSLIKE:', forecastData.feelslike + '° C');
      console.log('RAIN PROBABILITY:', forecastData.precip + '%');
    });
  });
} else {
  console.log('ERROR: Missing address argument. Please run node app.js <<address>>');
}
