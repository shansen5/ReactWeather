var React = require( 'react' );

var WeatherForm = require( 'WeatherForm' );
var WeatherMessage = require( 'WeatherMessage' );
var openWeatherMap = require( 'openWeatherMap' );

var Weather = React.createClass( {
    getDefaultProps: function () {
        return {
            city: 'Default city',
            temp: 49,
            pressure: 100,
            humidity: 40
        }
    },
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function( city ) {
        this.setState( { isLoading: true } );
        openWeatherMap.getWeatherData( city ).then ( ( data ) => {
            this.setState( {
                isLoading: false,
                city: city,
                temp: data.temp,
                pressure: data.pressure,
                humidity: data.humidity,
                tempMin: data.temp_min,
                tempMax: data.temp_max
            })
        }, function ( error ) {
            alert( error );
            that.setState( { isLoading: false });
        });
    },
    render: function () {
        var stateData = this.state;
        var {isLoading, temp, city} = stateData;
        function renderMessage () {
            if ( isLoading ) {
                return <h3>Fetching...</h3>;
            } else if ( temp && city ) {
                return <WeatherMessage data={stateData}/>;
            }
        }
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
})

module.exports = Weather;