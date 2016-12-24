import React from 'react';
import NavLink from './NavLink';

export default React.createClass({
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
});
