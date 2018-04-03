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
    switch (action.type) {
        case actionTypes.CHANGE_PASSWORD_LENGTH:
            const newLength = Math.random();
            return {
                ...state,
                length: newLength
            }
        case actionTypes.GENERATE_PASSWORD:
            const newPassword = Math.random();
            return {
                ...state,
                password: newPassword
            }
    }

    return state;
}

export default reducer;