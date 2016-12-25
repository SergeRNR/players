import React from 'react';
import { connect } from 'react-redux';
import { loadPlayers } from '../actionCreators';

class List extends React.Component {
    componentDidMount() {
        this.props.dispatch(loadPlayers())
    }

    render() {
        let items = this.props.list.map(item =>
            <li key={item.id}>name: {item.name}</li>
        );

        return <ul>{items}</ul>;
    }
}

export default connect((state) => ({
    list: state.players
}))(List);
