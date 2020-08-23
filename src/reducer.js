export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
    // token: 'BQBu5poFZSnNP7ISkmzA0CY2Z-P5ViqkXX9zU6Ge410K5BLxMl8tquc6W8I3g0b1dm6hIDsfv19F7IVQPad-oVgRZV1bsomZEK3NfWz0DVCtIuMhWr6xYhCfcbyr6htXLPzkW6oFnEXmb-rkB-fmfvBYNKBXoIgDRxzA2Bx5c1illC6CAhTV'
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
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;