import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'

class ItemButton extends Component {

    render() {
        const name = this.props.name.toLowerCase();
        return (
            <Button href={`/${name}`} id={name}>{this.props.name}</Button>
        )
    }
}

export default ItemButton