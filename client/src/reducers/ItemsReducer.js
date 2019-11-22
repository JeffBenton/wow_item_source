export default function ItemsReducer(state = {
    cards: {
        azerite: [],
        weapons: [],
        trinkets: []
    },
    loading: false
}, action) {
    switch (action.type) {
        case 'LOADING_AZERITE':
            return {
                ...state,
                loading: true
            };

        case 'ADD_AZERITE':
            return {
                ...state,
                cards: {
                    ...state,
                    azerite: action.cards
                },
                loading: false
            };

        case 'DISPLAY_AZERITE':
            return {
                ...state,
                piece: state.cards.azerite.find(card => action.id === card.id)
            };

        default:
            return state
    }
}