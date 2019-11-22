import React from 'react';

import Card from 'react-bootstrap/Card'

const TrinketCard = props => {

    const handleClick = () => {
        props.view(props.info.id, 'DISPLAY_TRINKET');
    };

    return (
        <Card onClick={handleClick} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.info.name}</Card.Title>

            </Card.Body>
        </Card>
    )
};

export default TrinketCard