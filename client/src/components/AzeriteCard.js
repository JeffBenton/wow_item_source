import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'

class AzeriteCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{this.props.info.name}</Card.Title>

                    <Card.Subtitle style={{ paddingBottom: 5 }}>Tier 4</Card.Subtitle>
                    {this.props.info.tier_four.map(trait => (
                        <Card.Subtitle key={trait} style={{ fontSize: 12, paddingBottom: 4 }}>{trait}</Card.Subtitle>
                    ))}

                    <Card.Subtitle style={{ paddingBottom: 5, paddingTop: 2 }}>Tier 3</Card.Subtitle>
                    {this.props.info.tier_three.map(trait => (
                        <Card.Subtitle key={trait} style={{ fontSize: 12, paddingBottom: 4 }}>{trait}</Card.Subtitle>
                    ))}

                    <Card.Subtitle style={{ paddingBottom: 5, paddingTop: 2 }}>Tier 2</Card.Subtitle>
                    {this.props.info.tier_two.map(trait => (
                        <Card.Subtitle key={trait} style={{ fontSize: 12, paddingBottom: 4 }}>{trait}</Card.Subtitle>
                    ))}

                    <Card.Subtitle style={{ paddingBottom: 5, paddingTop: 2 }}>Tier 1</Card.Subtitle>
                    {this.props.info.tier_one.map(trait => (
                        <Card.Subtitle key={trait} style={{ fontSize: 12, paddingBottom: 4 }}>{trait}</Card.Subtitle>
                    ))}

                    <Card.Text>Source: {this.props.info.source}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default AzeriteCard