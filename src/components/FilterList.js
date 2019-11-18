import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class FilterList extends Component {

    state = {
        class: 'Select Class'
    };

    handleClassSelection = e => {
        this.setState({
            class: e.target.title
        })
    };

    render() {
        return (
            <DropdownButton id="dropdown-class-button" title={this.state.class}>
                {['Death Knight', 'Demon Hunter', 'Druid', 'Hunter', 'Mage', 'Monk', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'].map(cls => (
                    <div key={cls}>
                        <Dropdown.Item onClick={this.handleClassSelection} title={cls}>{cls}</Dropdown.Item>
                    </div>
                ))}
            </DropdownButton>
        )
    }
}

export default FilterList
