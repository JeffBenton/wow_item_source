import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

class ItemButton extends Component {

    render() {
        const name = this.props.name.toLowerCase();
        return (
            <NavLink to={`/${name}`} activeStyle={{ disabled: true }} id={name}><Button>{this.props.name}</Button></NavLink>


        )
    }
}

export default ItemButton