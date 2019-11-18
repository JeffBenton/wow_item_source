import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class FilterList extends Component {

    state = {
        class: 'Select Class',
        sources: {
            raid: false,
            dungeon: false,
            pvp: false
        }
    };

    handleClassSelection = e => {
        this.setState({
            class: e.target.title
        })
    };

    handleSourceSelection = e => {
        const source = e.target.id.toLowerCase();
        const sources = this.state.sources;
        sources[source] = !this.state.sources[source];

        this.setState({
            sources
        })
    };

    render() {
        console.log(this.state);
        return (
            <Container>
                <Row>
                    <DropdownButton id="dropdown-class-button" title={this.state.class}>
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
                                    onClick={this.handleSourceSelection}
                                    custom
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

export default FilterList
