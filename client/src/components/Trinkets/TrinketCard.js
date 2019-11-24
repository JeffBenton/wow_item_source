import React from 'react';

import Card from 'react-bootstrap/Card'

const TrinketCard = props => {

    const handleClick = () => {
        props.view(props.info.id, 'trinkets', 'DISPLAY_TRINKET');
    };

    return (
        <Card onClick={handleClick} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.info.name}</Card.Title>

                <Card.Subtitle style={{ paddingBottom: 5 }}>{props.info.trinket_type.join(", ")}</Card.Subtitle>

                <Card.Text>
                    Source: {props.info.source} <br />
                    Boss: {props.info.boss}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default TrinketCard