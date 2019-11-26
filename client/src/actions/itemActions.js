import $ from 'jquery';

export const fetchItems = (path, params) => {
    const type = `ADD_${path.toUpperCase()}`;
    return dispatch => {
        let url = `/api/${path}/search?` + $.param(params)
        fetch(url)
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type, cards: responseJSON})
            })
    }
};

export const displayPiece = (id, category, type) => {
    return dispatch => {
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