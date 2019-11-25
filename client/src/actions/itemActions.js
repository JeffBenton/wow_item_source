import $ from 'jquery';

export const fetchAzerite = params => {
    return (dispatch) => {
        dispatch({ type: "LOADING_AZERITE"});
        let url = '/api/azerite/search?' + $.param({ class: params.class, sources: params.sources, slots: params.slots });
        fetch(url)
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type: 'ADD_AZERITE', cards: responseJSON})
            })
    }
};

export const fetchTrinkets = params => {
    return dispatch => {
        dispatch({ type: 'LOADING_TRINKETS' });
        let url = '/api/trinkets/search?' + $.param({ role: params.role, sources: params.sources });
        fetch(url)
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type: 'ADD_TRINKETS', cards: responseJSON})
            })
    }
};

export const fetchWeapons = params => {
    return dispatch => {
        dispatch({ type: 'LOADING_WEAPONS' });
        let url = '/api/weapons/search?' + $.param({ role: params.role, sources: params.sources });
        fetch(url)
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type: 'ADD_WEAPONS', cards: responseJSON})
            })
    }
};

export const displayPiece = (id, category, type) => {
    return dispatch => {
        dispatch({ type: "LOADING_AZERITE"});
        const data = { id };
        fetch(`/api/${category}/update`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type , piece: responseJSON})
            })
    }
};