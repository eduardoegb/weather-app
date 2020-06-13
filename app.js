const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const { argv } = process;
const address = argv[2];

if (address) {
  geocode(address, (error, data) => {
    if (error) {
      return console.log('ERROR:', error);
    }
    forecast(data, (error, { weather, temperature, feelslike, precip }) =>{
      if (error) {
       return console.log('ERROR:', error);
      }
      console.log('LOCATION:', data.location);
      console.log('WEATHER:', weather);
      console.log('TEMPERATURE:', temperature + '° C');
      console.log('FEELSLIKE:', feelslike + '° C');
      console.log('RAIN PROBABILITY:', precip + '%');
    });
  });
} else {
  console.log('ERROR: Missing address argument. Please run node app.js <<address>>');
}
