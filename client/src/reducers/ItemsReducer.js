export default function ItemsReducer(state = {
    cards: [],
    loading: false
}, action) {
    switch (action.type) {
        case 'LOADING_AZERITE':
            return {
                ...state,
                cards: [...state.cards],
                loading: true
            };

        case 'ADD_AZERITE':
            return {
                ...state,
                cards: action.cards,
                loading: false
            };

        case 'DISPLAY_PIECE':
            return {
                ...state,
                piece: state.cards.find(card => action.id === card.id)
            };

        default:
            return state
    }
}