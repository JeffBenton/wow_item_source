import React, { Component } from 'react';
import AzeriteCard from '../components/AzeriteCard'

import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'

class ItemsContainer extends Component {

    state = {
        cards: []
    };

    componentDidMount() {
        fetch('/api/azerite')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    cards: data
                })
            })

    }

    displayCards = () => {
        if(this.state.cards.length > 0) {
            return (this.state.cards.map(card => (
                <AzeriteCard key={card.id} info={card} />
            )))
        }
        else {
            return (<div>No Items</div>)
        }
    };

    render() {
        return (
            <Container>
                <CardColumns>
                    {/*<AzeriteCard info={this.state.cards} />*/}
                    {this.displayCards()}
                </CardColumns>
            </Container>
        )
    }
}

export default ItemsContainer