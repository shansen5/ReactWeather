var axios = require( 'axios' );

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3dc18236b9b1fe349c71cd551becb87f&units=imperial';

module.exports = {
    getWeatherData: function ( city ) {
        var encodedCity = encodeURIComponent( city );
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;

        return axios.get( requestUrl ).then( function ( response ) {
            if ( !response.data ) {
                throw new Error( 'No data returned' );
            } else if ( response.data.cod && response.data.message ) {
                throw new Error( response.data.message );
            } else {
                return response.data;
            }
        }, function ( response ) {
            if ( !response.data ) {
                throw new Error( 'No data returned' );
            } else {
                throw new Error( response.data.message );
            }
        });
    }
}
