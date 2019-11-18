import React, { Component } from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class FilterList extends Component {

    selectClass = e => {
        console.log(e.target.value)
    };

    render() {
        return (
            <Button onClick={this.selectClass}>Select Class</Button>
        )
    }
}

export default FilterList

// <Form>
// <Form.Label>Class</Form.Label>
// {['Death Knight', 'Demon Hunter', 'Druid', 'Hunter', 'Mage', 'Monk', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'].map(cls => (
//     <div key={cls}>
//         <Form.Check
//             type={'radio'}
//             id={cls}
//             label={cls}
//         />
//     </div>
// ))}
//
// <Form.Label>Source</Form.Label>
// {['Raid', 'Dungeon', 'PvP'].map(src => (
//     <div key={src}>
//         <Form.Check
//             type={'checkbox'}
//             id={src}
//             label={src}
//         />
//     </div>
// ))}
// </Form>