import React, { Component } from 'react';
import SearchBarContainer from "./SearchBarContainer";
import NavButtonsContainer from "./NavButtonsContainer";
import ItemsContainer from "./ItemsContainer";

class AzeriteContainer extends Component {
    render() {
        return (
            <div>
                <SearchBarContainer />
                <NavButtonsContainer />
                <ItemsContainer />
            </div>
        )
    }
}

export default AzeriteContainer