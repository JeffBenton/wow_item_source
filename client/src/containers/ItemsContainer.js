import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAzerite } from "../actions/azeriteActions";

import AzeriteCard from '../components/Azerite/AzeriteCard'

import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'

class ItemsContainer extends Component {

    state = {
        cards: []
    };

    componentDidMount() {
        this.props.fetchAzerite()
    }

    displayCards = () => {
        if(this.props.cards.length > 0) {
            return (this.props.cards.map(card => (
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
                    {this.displayCards()}
                </CardColumns>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAzerite: () => dispatch(fetchAzerite())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)