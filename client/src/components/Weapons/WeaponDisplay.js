import React from 'react';
import { connect } from 'react-redux'

const WeaponsDisplay = props => {
    const info = props.info;

    if (info) {
        return (
            <div>
                <h1>{info.name}</h1>
                <h3>{info.weapon_type}</h3>
                <h3>Role: {info.role}</h3>
                <h3>Source: {info.source}</h3>
                <h3>Boss: {info.boss}</h3>
                <h3>Views: {info.views}</h3>
            </div>
        )
    }
    else {
        return (
            <div>Loading...</div>
        )
    }
};

const mapStateToProps = state => {
    return {
        info: state.weapons.piece
    }
};

export default connect(mapStateToProps)(WeaponsDisplay);