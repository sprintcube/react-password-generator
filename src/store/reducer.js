import * as actionTypes from './actions';

const initialState = {
    length: 10,
    options: {
        symbols: true,
        numbers: true
    },
    password: 'password'
};

const reducer = (state = initialState, action) => {
    return state;
}

export default reducer;