var React = require( 'react' );

var WeatherForm = React.createClass( {
    onFormSubmit: function ( e ) {
        e.preventDefault();
        var cityRef = this.refs.city;
        var city = cityRef.value;
        if ( city.length > 0 ) {
            cityRef.value = '';
            this.props.onSearch( city );
        }
        /*
        var updates = {};
        if ( city.length > 0 ) {
            cityRef.value = '';
            updates[ "city" ] = city;
        }
        this.props.onSearch( updates );
        */
    },
    render: function () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" placeholder="Enter city" ref="city"/>
                    </div>
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        )
    }
})

module.exports = WeatherForm;