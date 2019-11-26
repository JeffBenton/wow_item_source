export default function AzeriteReducer(state = {
    cards: [],
    char_class: "Select a Class",
    sources: {
        Raid: true,
        Dungeon: true,
        PvP: true
    },
    slots: {
        Head: true,
        Shoulder: true,
        Chest: true
    },
    loading: false
}, action) {
    switch (action.type) {
        case 'ADD_AZERITE':
            return {
                ...state,
                cards: action.cards,
            };

        case 'DISPLAY_AZERITE':
            return {
                ...state,
                piece: action.piece,
            };

        case 'SET_CLASS':
            return {
                ...state,
                char_class: action.char_class
            };

        case 'SET_AZERITE_SOURCE':
            state.sources[action.source] = !action.value;
            return {
                ...state,
                sources: { ...state.sources }
            };

        case 'SET_SLOT':
            state.slots[action.slot] = !action.value;
            return {
                ...state,
                slots: { ...state.slots }
            };

        default:
            return state
    }
}