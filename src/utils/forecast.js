const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherbit.io/v2.0/current?lat=' + latitude + '&lon=' + longitude + '&key=7107b1c70bc247fbb63255131d950d42'
    request({ url, json: true }, (error, { body }) => {
        const {error: error1, data } = body
        if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (error1) {
        callback('Unable to find location', undefined)
    } else {
        callback(undefined, data[0].weather.description + '. It is currently ' + data[0].temp + ' degrees out. Sunrises at: ' + data[0].sunrise + ' o\'clock and sunsets at ' + data[0].sunset + ' o\'clock. There is a ' + data[0].precip  + '% chance of rain.')
    }
 })
}

module.exports = forecast
