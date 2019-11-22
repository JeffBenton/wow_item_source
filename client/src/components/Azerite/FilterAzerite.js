import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards, fetchAzerite } from "../../actions/itemActions";

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class FilterAzerite extends Component {

    state = {
        sources: {
            raid: true,
            dungeon: true,
            pvp: true
        },
        slots: {
            helm: true,
            shoulder: true,
            chest: true
        }
    };

    handleClassSelection = e => {
        this.props.setClass(e.target.title);
        this.props.fetchAzerite(e.target.title)
    };

    handleSourceSelection = e => {
        const source = e.target.id.toLowerCase();
        const sources = this.state.sources;
        sources[source] = !this.state.sources[source];

        this.setState({
            sources
        })
    };

    handleSlotSelection = e => {
        const slot = e.target.id.toLowerCase();
        const slots = this.state.slots;
        slots[slot] = !this.state.slots[slot];

        this.setState({
            slots
        })
    };

    render() {
        return (
            <Container>
                <Row>
                    <DropdownButton id="dropdown-class-button" title={this.props.char_class}>
                        {['Death Knight', 'Demon Hunter', 'Druid', 'Hunter', 'Mage', 'Monk', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'].map(cls => (
                            <div key={cls}>
                                <Dropdown.Item onClick={this.handleClassSelection} title={cls}>{cls}</Dropdown.Item>
                            </div>
                        ))}
                    </DropdownButton>

                    <Form>
                        {['Raid', 'Dungeon', 'PvP'].map(source => (
                            <div key={source}>
                                <Form.Check
                                    onChange={this.handleSourceSelection}
                                    custom
                                    checked={this.state.sources[source.toLowerCase()]}
                                    label={source}
                                    type="checkbox"
                                    id={source}
                                />
                            </div>
                        ))}
                    </Form>
                    <Form>
                        {['Helm', 'Shoulder', 'Chest'].map(slot => (
                            <div key={slot}>
                                <Form.Check
                                    onChange={this.handleSlotSelection}
                                    custom
                                    checked={this.state.slots[slot.toLowerCase()]}
                                    label={slot}
                                    type="checkbox"
                                    id={slot}
                                />
                            </div>
                        ))}
                    </Form>
                </Row>
            </Container>
        )
    }
}

FilterAzerite.defaultProps = {
    char_class: "Select a Class"
};

const mapStateToProps = state => {
    return {
        char_class: state.char_class
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCards: path => dispatch(fetchCards(path)),
        fetchAzerite: params => dispatch(fetchAzerite(params)),
        setClass: char_class => dispatch({ type: "SET_CLASS", char_class })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterAzerite)
