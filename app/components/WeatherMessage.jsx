var React = require( 'react' );

var WeatherMessage = ( {data} ) => {
    return ( 
        <div className="text-center">
            <p>{data.city}:
                <br/>       Temperature is {data.weatherData.main.temp} degrees
                <br/>        Pressure is {data.weatherData.main.pressure} millibars
                <br/>        Humidity is {data.weatherData.main.humidity} percent
                <br/>        Cloud cover is {data.weatherData.clouds.all} percent
                <br/>        Wind speed is {data.weatherData.wind.speed} mph
                <br/>        Wind direction is {data.weatherData.wind.deg} degrees
                <br/>        Min temperature is {data.weatherData.main.temp_min} degrees
                <br/>        Max temperature is {data.weatherData.main.temp_max} degrees
                <br/>        Sunrise is {data.weatherData.sys.sunrise}
                <br/>        Sunset is {data.weatherData.sys.sunset}
            </p>
        </div>
    )
}

module.exports = WeatherMessage;