import React from 'react';
import { connect } from 'react-redux';
import { loadPlayers } from '../actionCreators';

class Compare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statsProps: [
                { key: 'battles_total', label: 'Battles' },
                { key: 'wins_total', label: 'Wins' },
                { key: 'days_total', label: 'Days' },
                { key: 'vehicles_x', label: 'Vehicles X lvl' },
                { key: 'rating', label: 'Rating' },
                { key: 'exp_avg', label: 'Exp avg.' },
                { key: 'exp_total', label: 'Exp total' }
            ]
        };
    }

    componentDidMount() {
        this.props.dispatch(loadPlayers())
    }

    compareValues(valA, valB) {
        // if null or undefined
        if (valA == null || valB == null) {
            return 'na';
        } else if (valA === valB) {
            return 'equal';
        } else {
            return valA > valB ? 'max' : 'min';
        }
    }

    getPlayerHeader(player) {
        const SELECT_PLAYER = 'Select player...';
        return <th>{player ? player.name : SELECT_PLAYER}</th>;
    }

    getPlayerCell(value) {
        return <td>{value == null ? '' : value}</td>;
    }

    render() {
        let rows = this.state.statsProps.map(prop => {
            let key = prop.key;
            let valA = this.props.playerA ? this.props.playerA[key] : null;
            let valB = this.props.playerB ? this.props.playerB[key] : null;
            let className = this.compareValues(valA, valB);

            return (
                <tr key={prop.key} className={`sm-compare-${className}`}>
                    {this.getPlayerCell(valA)}
                    <td>{prop.label}</td>
                    {this.getPlayerCell(valB)}
                </tr>
            );
        });

        return (
            <table className='sm-table sm-table-compare'>
                <thead>
                    <tr>
                        {this.getPlayerHeader(this.props.playerA)}
                        <th></th>
                        {this.getPlayerHeader(this.props.playerB)}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default connect((state) => {
    // TODO: set filtered players
    if (state.players.length) {
        return {
            playerA: state.players[0],
            playerB: state.players[2]
        };
    }
    return { playerA: null, playerB: null };
})(Compare);
