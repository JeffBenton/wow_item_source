import React, { Component } from 'react';
import AzeriteCard from '../components/AzeriteCard'

import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'

class ItemsContainer extends Component {

    cardProps = {
        name: "Sea-Brawler's Greathelm",
        source: "Dungeon",
        tier4: ["Bastion of Might", "Callous Reprisal", "Pulverizing Blows", "Simmering Rage", "Test of Might", "Crushing Assault"],
        tier3: [ "Deafening Crash", "Cold Steel, Hot Blood", "Lord of War", "Dagger in the Back"],
        tier2: ["Earthlink", "Azerite Globules", "Shimmering Haven"],
        tier1: ["Resounding Protection", "Vampiric Speed"]
    };

    render() {
        return (
            <Container>
                <CardColumns>
                    <AzeriteCard info={this.cardProps} />
                    <AzeriteCard info={this.cardProps} />
                    <AzeriteCard info={this.cardProps} />
                    <AzeriteCard info={this.cardProps} />
                    <AzeriteCard info={this.cardProps} />
                    <AzeriteCard info={this.cardProps} />
                    <AzeriteCard info={this.cardProps} />
                    <AzeriteCard info={this.cardProps} />
                    <AzeriteCard info={this.cardProps} />
                    <AzeriteCard info={this.cardProps} />
                    <AzeriteCard info={this.cardProps} />
                    <AzeriteCard info={this.cardProps} />
                </CardColumns>
            </Container>
        )
    }
}

export default ItemsContainer