var React = require( 'react' );
var {Link} = require( 'react-router' );

var Examples = ( props ) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try:</p>
            <ol>
                <li>
                    <Link to='/?city=Bellingham,WA'>Bellingham, WA</Link>
                </li>
                <li>
                    <Link to='/?city=Luxembourg'>Luxembourg</Link>
                </li>
            </ol>
        </div>
    )
}

module.exports = Examples;