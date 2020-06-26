const request = require('request')
const dotenv = require('dotenv').config()

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + dotenv.parsed.MAPBOX_KEY
    request({ url, json: true }, (error, { body } ) => {
        const {features} = body
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (features.length === 0) {
            callback('Unable to find location. Try another search.',  undefined)
        } else {
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            })
        }

    })
}

module.exports = geocode