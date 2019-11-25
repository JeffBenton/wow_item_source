import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrinkets } from "../../actions/itemActions";

import Row from "react-bootstrap/Row";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

class FilterTrinkets extends Component {

    componentDidMount() {
        // this.props.fetchTrinkets(this.props.path)
        console.log(this.props)
    }

    handleRoleSelection = e => {
        this.props.setRole(e.target.title)
        // this.props.fetchTrinkets()
    };

    handleSourceSelection = e => {
        const value = this.props.sources[e.target.id];
        this.props.setSource(e.target.id, value);
        // this.props.fetchTrinkets()

    };

    render() {
        return (
            <Container>
                <Row>
                    <DropdownButton id="dropdown-trinket-button" title={this.props.role}>
                        {['Agi Dps', 'Int Dps', 'Str Dps', 'Tank', 'Heal'].map(role => (
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
        role: state.trinkets.role,
        sources: state.trinkets.sources
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTrinkets: path => dispatch(fetchTrinkets(path)),
        setRole: role => dispatch({ type: "SET_ROLE", role }),
        setSource: (source, value) => dispatch({ type: "SET_SOURCE", source, value })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTrinkets)