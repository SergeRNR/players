import React from 'react';

class List extends React.Component {
    componentDidMount() {
        this.props.onMount();
    }

    render() {
        let items = this.props.list.map(item =>
            <li key={item.id}>name: {item.name}</li>
        );

        return <div className='sm-content'><ul>{items}</ul></div>;
    }
}

export default List;
