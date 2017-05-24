var React = require( 'react' );

var WeatherMessage = ( {data} ) => {
    return ( 
        <div>
            <p>{data.city}: Temperature is {data.temp}
                <br/>        Pressure is {data.pressure}
                <br/>        humidity is {data.humidity}
                <br/>        Min temperature is {data.tempMin}
                <br/>        Max temperature is {data.tempMax}
            </p>
        </div>
    )
}

module.exports = WeatherMessage;