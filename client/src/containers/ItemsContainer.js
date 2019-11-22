import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from "../actions/itemActions";
import { NavLink } from 'react-router-dom';

import AzeriteCard from '../components/Azerite/AzeriteCard'
import TrinketCard from "../components/Trinkets/TrinketCard";

import CardColumns from 'react-bootstrap/CardColumns'

class ItemsContainer extends Component {

    state = {
        cards: {
            azerite: [],
            weapons: [],
            trinkets: []
        }
    };

    componentDidMount() {
        this.props.fetchCards(this.props.path)
    }

    displayCards = () => {
        switch(this.props.path) {
            case "azerite":
                return (this.props.cards.azerite.map(card => (
                    <NavLink style={{ color: "black" }} to={`/azerite/${card.id}`} key={card.id}><AzeriteCard view={this.props.displayPiece} info={card} /></NavLink>
                )));

            case "trinkets":
                return (this.props.cards.trinkets.map(card => (
                    <NavLink style={{ color: "black" }} to={`/trinkets/${card.id}`} key={card.id}><TrinketCard view={this.props.displayPiece} info={card} /></NavLink>
                )));

            default:
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
        fetchCards: path => dispatch(fetchCards(path)),
        displayPiece: (id, type) => dispatch({ type, id })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)