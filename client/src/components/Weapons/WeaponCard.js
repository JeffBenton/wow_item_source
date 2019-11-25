import React from 'react';

import Card from 'react-bootstrap/Card'

const WeaponCard = props => {

    const handleClick = () => {
        props.view(props.info.id, 'weapons', 'DISPLAY_WEAPON');
    };

    return (
        <Card onClick={handleClick} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.info.name}</Card.Title>

                <Card.Subtitle style={{ paddingBottom: 5 }}>{props.info.weapon_type}</Card.Subtitle>
                <Card.Subtitle style={{ paddingBottom: 5 }}>{props.info.role}</Card.Subtitle>

                <Card.Text>
                    Source: {props.info.source} <br />
                    Boss: {props.info.boss}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default WeaponCard