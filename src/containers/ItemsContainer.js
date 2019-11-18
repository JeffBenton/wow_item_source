import React, { Component } from 'react';
import AzeriteCard from '../components/AzeriteCard'

import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'

class ItemsContainer extends Component {

    cardProps = {
        name: "Sea-Brawler's Greathelm",
        source: "Dungeon",
        tier4: ["Bastion of Might", "Pulverizing Blows", "Test of Might", "Crushing Assault", "Simmering Rage", "Callous Reprisal"],
        tier3: ["Cold Steel, Hot Blood", "Dagger in the Back", "Lord of War", "Deafening Crash"],
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