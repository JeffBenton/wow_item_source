export default function ItemsReducer(state = {
    cards: {
        azerite: [],
        weapons: [],
        trinkets: []
    },
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
    loading: false,
    role: "Role"
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
                    ...state.cards,
                    azerite: action.cards
                },
                loading: false
            };

        case 'DISPLAY_AZERITE':
            return {
                ...state,
                piece: action.piece,
                loading: false
            };

        case 'SET_CLASS':
            return {
                ...state,
                char_class: action.char_class
            };

        case 'SET_SOURCE':
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

        case 'LOADING_TRINKETS':
            return {
                ...state,
                loading: true
            };

        case 'ADD_TRINKETS':
            return {
                ...state,
                cards: {
                    ...state.cards,
                    trinkets: action.cards
                },
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

        default:
            return state
    }
}