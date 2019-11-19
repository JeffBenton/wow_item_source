import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';
import FilterAzerite from '../components/Azerite/FilterAzerite';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SearchBarContainer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><SearchBar /></Col>
                    <Col><FilterAzerite /></Col>
                </Row>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(SearchBarContainer)