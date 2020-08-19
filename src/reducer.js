export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQBpN91ctBiueZ3-xIIQgsSvlP3Ry1gjL__cutsb4M62jJNyW8GRIy4kqvyEdMUlSQGTbODCV1rSMVQ3nWQLF9Izsx7sODJx193uVURhWEPSgdDMknyRQNeq9V8Z3GtDn3rlO0v7QPX-uKgr9b17U4sMZwIZd3mdSa8taTWQY7Bci_-oU-qa'
};

const reducer = (state, action) => {
    console.log(action)

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;