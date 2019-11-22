export const fetchCards = path => {
    const upperPath = path.toUpperCase();
    return (dispatch) => {
        dispatch({ type: `LOADING_${upperPath}`});
        fetch(`/api/${path}`)
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type: `ADD_${upperPath}`, cards: responseJSON})
            })
    }
};

export const fetchAzerite = params => {
    return (dispatch) => {
        dispatch({ type: "LOADING_AZERITE"});
        fetch(`/api/search?class=${params}`)
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type: 'ADD_AZERITE', cards: responseJSON})
            })
    }
};