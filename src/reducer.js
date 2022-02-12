export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //token: null
    token: 'BQDA2-nbsWGnJkViOafU09UnaiU9_T2erOjEAlF5dcV_iKdiw0…34k9xBtfn1RedWV0PPorTPnRW9wEHf7rFmNyW4ubtZL708V_I'
};

const reducer = (state, action) => {
    console.log(action);
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

        default:
            return state;
    }
};
export default reducer;
