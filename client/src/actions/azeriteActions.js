export const fetchAzerite = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_AZERITE'});
        fetch('/api/azerite')
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type: 'ADD_AZERITE', cards: responseJSON})
            })
    }
}