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
        case 'ADD_TRINKETS':
            return {
                ...state,
                cards: action.cards,
            };

        case 'DISPLAY_TRINKET':
            return {
                ...state,
                piece: action.piece,
            };

        case 'SET_TRINKET_ROLE':
            return {
                ...state,
                role: action.role
            };

        case 'SET_TRINKET_SOURCE':
            state.sources[action.source] = !action.value;
            return {
                ...state,
                sources: { ...state.sources }
            };

        default:
            return state
    }
}