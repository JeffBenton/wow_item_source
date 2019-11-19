import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'

class ItemButton extends Component {

    handleClick = e => {
        this.props.setDisplay(e.target.id)
    };

    render() {
        return (
            <Button onClick={this.handleClick} id={this.props.name.toLowerCase()}>{this.props.name}</Button>
        )
    }
}

export default ItemButton