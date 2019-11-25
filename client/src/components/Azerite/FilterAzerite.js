import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAzerite } from "../../actions/itemActions";

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class FilterAzerite extends Component {

    handleClassSelection = e => {
        this.props.setClass(e.target.title);
        this.props.fetchAzerite({ class: e.target.title, sources: this.props.sources, slots: this.props.slots })
    };

    handleSourceSelection = e => {
        const value = this.props.sources[e.target.id];
        this.props.setSource(e.target.id, value);
        this.props.fetchAzerite({ class: this.props.char_class, sources: this.props.sources, slots: this.props.slots })
    };

    handleSlotSelection = e => {
        const value = this.props.slots[e.target.id];
        this.props.setSlot(e.target.id, value);
        this.props.fetchAzerite({ class: this.props.char_class, sources: this.props.sources, slots: this.props.slots })
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
                                    checked={this.props.sources[source]}
                                    label={source}
                                    type="checkbox"
                                    id={source}
                                />
                            </div>
                        ))}
                    </Form>
                    <Form>
                        {['Head', 'Shoulder', 'Chest'].map(slot => (
                            <div key={slot}>
                                <Form.Check
                                    onChange={this.handleSlotSelection}
                                    custom
                                    checked={this.props.slots[slot]}
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

const mapStateToProps = state => {
    return {
        char_class: state.char_class,
        sources: state.sources,
        slots: state.slots
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAzerite: params => dispatch(fetchAzerite(params)),
        setClass: char_class => dispatch({ type: "SET_CLASS", char_class }),
        setSource: (source, value) => dispatch({ type: "SET_SOURCE", source, value }),
        setSlot: (slot, value) => dispatch({ type: "SET_SLOT", slot, value})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterAzerite)
