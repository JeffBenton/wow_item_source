import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import AzeriteCard from '../components/Azerite/AzeriteCard'
import TrinketCard from "../components/Trinkets/TrinketCard";
import WeaponCard from "../components/Weapons/WeaponCard";
import { displayPiece } from "../actions/itemActions"

import CardColumns from 'react-bootstrap/CardColumns'

class ItemsContainer extends Component {

    displayCards = () => {
        switch(this.props.path) {
            case "azerite":
                return (this.props.azerite.cards.map(card => (
                    <NavLink style={{ color: "black" }} to={`/azerite/${card.id}`} key={card.id}><AzeriteCard view={this.props.displayPiece} info={card} /></NavLink>
                )));

            case "trinkets":
                return (this.props.trinkets.cards.map(card => (
                    <NavLink style={{ color: "black" }} to={`/trinkets/${card.id}`} key={card.id}><TrinketCard view={this.props.displayPiece} info={card} /></NavLink>
                )));

            case "weapons":
                return (this.props.weapons.cards.map(card => (
                    <NavLink style={{ color: "black" }} to={`/weapons/${card.id}`} key={card.id}><WeaponCard view={this.props.displayPiece} info={card} /></NavLink>
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
        azerite: state.azerite,
        trinkets: state.trinkets,
        weapons: state.weapons
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // displayPiece: (id, type) => dispatch({ type, id })
        displayPiece: (id, category, type) => dispatch(displayPiece(id, category, type))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)