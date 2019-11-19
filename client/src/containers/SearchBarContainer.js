import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';
import FilterList from '../components/FilterList';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class SearchBarContainer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><SearchBar /></Col>
                    <Col><FilterList /></Col>
                </Row>
                <Row>
                    <Button>Azerite</Button>
                    <Button>Weapons</Button>
                    <Button>Trinkets</Button>
                </Row>
            </Container>
        )
    }
}



export default connect()(SearchBarContainer)