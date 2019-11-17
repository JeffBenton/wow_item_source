import React, { Component } from 'react';

import Form from 'react-bootstrap/Form'

class FilterList extends Component {
    render() {
        return (
            <Form>
                <Form.Label>Class</Form.Label>
                {['Death Knight', 'Demon Hunter', 'Druid', 'Hunter', 'Mage', 'Monk', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'].map(cls => (
                    <div key={cls}>
                        <Form.Check
                            type={'radio'}
                            id={cls}
                            label={cls}
                        />
                    </div>
                ))}

                <Form.Label>Source</Form.Label>
                {['Raid', 'Dungeon', 'PvP'].map(src => (
                    <div key={src}>
                        <Form.Check
                            type={'checkbox'}
                            id={src}
                            label={src}
                        />
                    </div>
                ))}
            </Form>
        )
    }
}

export default FilterList