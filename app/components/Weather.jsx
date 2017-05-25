var React = require( 'react' );

var WeatherForm = require( 'WeatherForm' );
var WeatherMessage = require( 'WeatherMessage' );
var openWeatherMap = require( 'openWeatherMap' );

var Weather = React.createClass( {
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
                weatherData: data
            })
        }, function ( error ) {
            alert( error );
            this.setState( { isLoading: false });
        });
    },
    render: function () {
        var stateData = this.state;
        var {isLoading, city, weatherData } = stateData;
        function renderMessage () {
            if ( isLoading ) {
                return <h3>Fetching...</h3>;
            } else if ( city && weatherData ) {
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