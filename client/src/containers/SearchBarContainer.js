import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import FilterList from '../components/FilterList';

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
            </Container>
        )
    }
}

export default SearchBarContainer