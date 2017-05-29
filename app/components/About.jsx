var React = require( 'react' );
var {Link} = require( 'react-router' );

var About = ( props ) => {
    return (
         <div>
            <h1 className="text-center page-title">About the Weather App</h1>
            <p>This app shows the weather for cities.</p>
            <p>
                A few of the tools that are used:
            </p>
            <ul>
                <li>
                    <a href='https://github.com/shansen5/ReactWeather'>The GitHub project</a> - The project with all code.
                </li>
                <li>
                    <a href='https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview'>The Complete React Web App Developer Course</a> - 
                    The course that inspired this app. (The instructor, Andrew Meade, is outstanding.:weather)
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - The source for the weather data.
                </li>
            </ul>
        </div>
    )
}

module.exports = About;