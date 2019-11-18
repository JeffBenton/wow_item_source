import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AzeriteCard extends Component {
    render() {
        return (
            <Container>
                <Row><Col>{this.props.info.name}</Col></Row>
                <Row><Col>{this.props.info.source}</Col></Row>
                <Row><Col>{this.props.info.tier1}</Col></Row>
                <Row><Col>{this.props.info.tier2}</Col></Row>
                <Row><Col>{this.props.info.tier3}</Col></Row>
                <Row><Col>{this.props.info.tier4}</Col></Row>
            </Container>
        )
    }
}

export default AzeriteCard