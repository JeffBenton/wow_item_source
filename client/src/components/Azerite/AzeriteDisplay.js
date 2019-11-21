import React from 'react';

const AzeriteDisplay = props => {
    const info = props.info;
    return (
        <div>
            <h1>{info.name}</h1>
            <h3>Source: {info.source}</h3>
            <h4>Tier 4</h4>
            {info.tier_four.map(trait => (
                <p style={{ marginBottom: 0 }} key={trait}>{trait}</p>
            ))}
            <h4>Tier 1</h4>
            {info.tier_three.map(trait => (
                <p style={{ marginBottom: 0 }} key={trait}>{trait}</p>
            ))}
            <h4>Tier 2</h4>
            {info.tier_two.map(trait => (
                <p style={{ marginBottom: 0 }} key={trait}>{trait}</p>
            ))}
            <h4>Tier 1</h4>
            {info.tier_one.map(trait => (
                <p style={{ marginBottom: 0 }} key={trait}>{trait}</p>
            ))}
        </div>
    )
};

export default AzeriteDisplay