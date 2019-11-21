import React from 'react';

import Card from 'react-bootstrap/Card'

const AzeriteCard = props => {

    const handleClick = () => {
        props.view(props.info.id);
        // window.location = `azerite/${this.props.info.id}`
    };

    return (
        <Card onClick={handleClick} style={{ width: '18rem', cursor: 'pointer' }}>
            <Card.Body>
                <Card.Title>{props.info.name}</Card.Title>
                <Card.Subtitle>{props.info.slot}</Card.Subtitle>

                <Card.Subtitle style={{ paddingBottom: 5 }}>Tier 4</Card.Subtitle>
                {props.info.tier_four.map(trait => (
                    <Card.Subtitle key={trait} style={{ fontSize: 12, paddingBottom: 4 }}>{trait}</Card.Subtitle>
                ))}

                <Card.Subtitle style={{ paddingBottom: 5, paddingTop: 2 }}>Tier 3</Card.Subtitle>
                {props.info.tier_three.map(trait => (
                    <Card.Subtitle key={trait} style={{ fontSize: 12, paddingBottom: 4 }}>{trait}</Card.Subtitle>
                ))}

                <Card.Subtitle style={{ paddingBottom: 5, paddingTop: 2 }}>Tier 2</Card.Subtitle>
                {props.info.tier_two.map(trait => (
                    <Card.Subtitle key={trait} style={{ fontSize: 12, paddingBottom: 4 }}>{trait}</Card.Subtitle>
                ))}

                <Card.Subtitle style={{ paddingBottom: 5, paddingTop: 2 }}>Tier 1</Card.Subtitle>
                {props.info.tier_one.map(trait => (
                    <Card.Subtitle key={trait} style={{ fontSize: 12, paddingBottom: 4 }}>{trait}</Card.Subtitle>
                ))}

                <Card.Text>Source: {props.info.source}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default AzeriteCard