import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAzerite } from "../actions/azeriteActions";

import AzeriteCard from '../components/Azerite/AzeriteCard'

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
                <AzeriteCard view={this.props.displayPiece} key={card.id} info={card} />
            )))
        }
        else {
            return (<div>No Items</div>)
        }
    };

    render() {
        return (
            <CardColumns>
                {this.displayCards()}
            </CardColumns>
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
        fetchAzerite: () => dispatch(fetchAzerite()),
        displayPiece: id => dispatch({ type: 'DISPLAY_PIECE', id })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)