import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ItemButton from "../components/ItemButton";

class NavButtonsContainer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><ItemButton name="Azerite" setDisplay={this.props.setDisplay} /></Col>
                    <Col><ItemButton name="Weapons" setDisplay={this.props.setDisplay} /></Col>
                    <Col><ItemButton name="Trinkets" setDisplay={this.props.setDisplay} /></Col>
                </Row>
            </Container>
        )
    }
}

export default NavButtonsContainer