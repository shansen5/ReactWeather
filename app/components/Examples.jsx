var React = require( 'react' );
var {Link} = require( 'react-router' );

var Examples = ( props ) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try:</p>
            <ol>
                <li>
                    <Link to='/?city=Bellingham,WA'>Bellingham, WA</Link>
                </li>
                <li>
                    <Link to='/?city=Louisville, CO'>Louisville, CO</Link>
                </li>
                 <li>
                    <Link to='/?city=Lakewood, CO'>Lakewood, CO</Link>
                </li>
                <li>
                    <Link to='/?city=Coupeville, WA'>Coupeville, WA</Link>
                </li>
                <li>
                    <Link to='/?city=Golden, CO'>Golden, CO</Link>
                </li>
                <li>
                    <Link to='/?city=Centennial, CO'>Centennial, CO</Link>
                </li>
              <li>
                    <Link to='/?city=Luxembourg'>Luxembourg</Link>
                </li>
            </ol>
        </div>
    )
}

module.exports = Examples;