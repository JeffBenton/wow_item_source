export default function WeaponsReducer(state = {
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
        case 'ADD_WEAPONS':
            return {
                ...state,
                cards: action.cards,
            };

        case 'DISPLAY_WEAPON':
            return {
                ...state,
                piece: action.piece,
            };

        case 'SET_WEAPON_ROLE':
            return {
                ...state,
                role: action.role
            };

        case 'SET_WEAPON_SOURCE':
            state.sources[action.source] = !action.value;
            return {
                ...state,
                sources: { ...state.sources }
            };

        default:
            return state
    }
}