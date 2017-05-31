var React = require( 'react' );

var WeatherMessage = ( {data} ) => {
    var utcSeconds = parseInt(data.weatherData.sys.sunrise);
    var sunrise = new Date( 0 );
    sunrise.setUTCSeconds( utcSeconds );
    utcSeconds = parseInt(data.weatherData.sys.sunset);
    var sunset = new Date( 0 );
    sunset.setUTCSeconds( utcSeconds );
    return ( 
        <div className="text-center">
            <p>{data.city}:
                <br/>       Temperature is {data.weatherData.main.temp} degrees
                <br/>        Pressure is {data.weatherData.main.pressure} millibars
                <br/>        Humidity is {data.weatherData.main.humidity} percent
                <br/>        Cloud cover is {data.weatherData.clouds.all} percent
                <br/>        Wind speed is {data.weatherData.wind.speed} mph
                <br/>        Wind direction is {data.weatherData.wind.deg} degrees
                <br/>        Sunrise is {sunrise.toString()} (in your time zone)
                <br/>        Sunset is {sunset.toString()} (in your time zone)
            </p>
        </div>
    )
}

module.exports = WeatherMessage;