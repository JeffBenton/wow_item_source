export default function ItemsReducer(state = {

}, action) {
    switch (action.type) {
        case 'SET_DISPLAY':
            return { ...state, display: action.display };

        default:
            return state
    }
}