import React from 'react';

const TrinketDisplay = props => {
    const info = props.info;

    if (info) {
        return (
            <div>
                <h1>{info.name}</h1>
                <h3>{info.trinket_type.join(", ")}</h3>
                <h3>Source: {info.source}</h3>
                <h3>Boss: {info.boss}</h3>
                <h3>Views: {info.views}</h3>
            </div>
        )
    }
    else {
        return (
            <div>Loading...</div>
        )
    }
};

export default TrinketDisplay;