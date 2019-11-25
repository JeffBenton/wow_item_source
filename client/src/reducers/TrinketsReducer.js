export default function TrinketsReducer(state = {
    cards: [],
    sources: {
        Raid: true,
        Dungeon: true,
        PvP: true
    },
    loading: false,
    role: "Role"
}, action) {
    switch (action.type) {
        case 'LOADING_TRINKETS':
            return {
                ...state,
                loading: true
            };

        case 'ADD_TRINKETS':
            return {
                ...state,
                cards: action.cards,
                loading: false
            };

        case 'DISPLAY_TRINKET':
            return {
                ...state,
                piece: action.piece,
                loading: false
            };

        case 'SET_ROLE':
            return {
                ...state,
                role: action.role
            };

        case 'SET_SOURCE':
            state.sources[action.source] = !action.value;
            return {
                ...state,
                sources: { ...state.sources }
            };

        default:
            return state
    }
}