export default function ItemsReducer(state = {

}, action) {
    switch (action.type) {
        case 'FETCH_AZERITE':
            return state;

        default:
            return state
    }
}