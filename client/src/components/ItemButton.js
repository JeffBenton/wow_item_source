import React from 'react';

import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

const ItemButton = props => {
    const name = props.name.toLowerCase();
    return (
        <NavLink to={`/${name}`} activeStyle={{ disabled: true }} id={name}><Button>{props.name}</Button></NavLink>
    )
};

export default ItemButton