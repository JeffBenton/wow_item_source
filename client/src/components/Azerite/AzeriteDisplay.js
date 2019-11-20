import React, { Component } from 'react';

class AzeriteDisplay extends Component {
    render() {
        console.log(this.props);
        return (
            <div>{this.props.info.id}</div>
        )
    }
}

export default AzeriteDisplay