import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeapons } from "../../actions/itemActions";

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class FilterWeapons extends Component {

    handleRoleSelection = e => {
        this.props.setRole(e.target.title);
        this.props.fetchWeapons({ role: e.target.title, sources: this.props.sources })
    };

    handleSourceSelection = e => {
        const value = this.props.sources[e.target.id];
        this.props.setSource(e.target.id, value);
    };

    render() {
        return (
            <Container>
                <Row>
                    <DropdownButton id="dropdown-class-button" title={this.props.role}>
                        {['Str 2h', 'Agi 1h'].map(role => (
                            <div key={role}>
                                <Dropdown.Item onClick={this.handleRoleSelection} title={role}>{role}</Dropdown.Item>
                            </div>
                        ))}
                    </DropdownButton>

                    <Form>
                        {['Raid', 'Dungeon', 'PvP'].map(source => (
                            <div key={source}>
                                <Form.Check
                                    onChange={this.handleSourceSelection}
                                    custom
                                    checked={this.props.sources[source]}
                                    label={source}
                                    type="checkbox"
                                    id={source}
                                />
                            </div>
                        ))}
                    </Form>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        role: state.weapons.role,
        sources: state.weapons.sources,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWeapons: params => dispatch(fetchWeapons(params)),
        setRole: role => dispatch({ type: "SET_WEAPON_ROLE", role }),
        setSource: (source, value) => dispatch({ type: "SET_WEAPON_SOURCE", source, value }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterWeapons)
