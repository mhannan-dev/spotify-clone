export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //token: null
    token: 'BQBix_gJjCUu4A-Jd2DM7B1tP9xm2bZG6EJU_songUGM-CFFrj…KjZfRq-C98thbxUjdkBexP7Y9MKqoW3eb0ukgb_ECVeQlFAzj'
};

const reducer = (state, action) => {
    //console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
};
export default reducer;
