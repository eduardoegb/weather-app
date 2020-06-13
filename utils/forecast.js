const request = require('postman-request');

const { ACCESS_KEY } = require('../credentials');

const forecast = (location, callback) => {
  const { latitude, longitude } = location;
  const url = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${latitude},${longitude}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to find data for this location!', undefined);
    } else {
      const { body: { current: { temperature, precip, weather_descriptions, feelslike }}} = response;
      
      callback(undefined, {
        temperature,
        precip,
        weather: weather_descriptions[0],
        feelslike
      })
    }
  });
};

module.exports = forecast;