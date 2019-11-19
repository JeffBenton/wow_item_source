import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';
import FilterList from '../components/FilterList';
import ItemButton from '../components/ItemButton';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SearchBarContainer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><SearchBar /></Col>
                    <Col><FilterList /></Col>
                </Row>
                <Row>
                    <Col><ItemButton name="Azerite" setDisplay={this.props.setDisplay} /></Col>
                    <Col><ItemButton name="Weapons" setDisplay={this.props.setDisplay} /></Col>
                    <Col><ItemButton name="Trinkets" setDisplay={this.props.setDisplay} /></Col>
                </Row>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setDisplay: display => dispatch({ type: "SET_DISPLAY", display })
});

export default connect(null, mapDispatchToProps)(SearchBarContainer)