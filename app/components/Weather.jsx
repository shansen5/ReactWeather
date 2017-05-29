var React = require( 'react' );

var WeatherForm = require( 'WeatherForm' );
var WeatherMessage = require( 'WeatherMessage' );
var ErrorModal = require( 'ErrorModal' );
var openWeatherMap = require( 'openWeatherMap' );


var Weather = React.createClass( {
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function( city ) {
        var that = this;
        this.setState( { 
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            weatherData: undefined
        });
        openWeatherMap.getWeatherData( city ).then ( ( data ) => {
            that.setState( {
                isLoading: false,
                city: city,
                weatherData: data
            })
        }, function ( error ) {
            that.setState( { 
                isLoading: false,
                errorMessage: error.message
            });
        });
    },
    componentDidMount: function () {
        var city = this.props.location.query.city;

        if ( city && city.length > 0 ) {
            this.handleSearch( city );
            window.location.hash = "#/";
        }
    },
    componentWillReceiveProps: function ( newProps ) {
        var city = newProps.location.query.city;

        if ( city && city.length > 0 ) {
            this.handleSearch( city );
            window.location.hash = "#/";
        }
    },
    render: function () {
        var stateData = this.state;
        var {isLoading, city, weatherData, errorMessage } = stateData;

        function renderMessage () {
            if ( isLoading ) {
                return <h3 className="text-center">Fetching...</h3>;
            } else if ( city && weatherData ) {
                return <WeatherMessage data={stateData}/>;
            }
        }

        function renderError () {
            if ( typeof errorMessage === 'string' ) {
                return (
                    <ErrorModal message={errorMessage} title="City?"/>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
})

module.exports = Weather;