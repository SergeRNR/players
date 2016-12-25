import React from 'react';
import NavLink from './NavLink';

// TODO: replace inline include of SASS
require('../styles/app.scss');

class App extends React.Component {
    render() {
        return (
            <div>
                <ul role="nav">
                    <li><NavLink to="/list">list</NavLink></li>
                    <li><NavLink to="/compare">compare</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;
