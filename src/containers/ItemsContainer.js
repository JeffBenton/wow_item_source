import React, { Component } from 'react';
import AzeriteCard from '../components/AzeriteCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ItemsContainer extends Component {

    cardProps = {
        name: "Sea-Brawler's Greathelm",
        source: "Dungeon",
        tier1: ["Bastion of Might", "Pulverizing Blows", "Test of Might", "Crushing Assault", "Simmering Rage", "Callous Reprisal"],
        tier2: ["Cold Steel, Hot Blood", "Dagger in the Back", "Lord of War", "Deafening Crash"],
        tier3: ["Earthlink", "Azerite Globules", "Shimmering Haven"],
        tier4: ["Resounding Protection", "Vampiric Speed"]
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col><AzeriteCard info={this.cardProps} /></Col>
                </Row>
            </Container>
        )
    }
}

export default ItemsContainer