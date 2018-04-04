import * as actionTypes from './actions';
import {generatePassword} from './utility';

const initialState = {
    length: 8,
    options: {
        symbols: true,
        numbers: true
    },
    password: 'password'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_PASSWORD_LENGTH:
            const newLength = action.value;
            return {
                ...state,
                length: newLength
            }
        case actionTypes.GENERATE_PASSWORD:
            const newPassword = generatePassword(state.length, state.options.symbols, state.options.numbers);
            return {
                ...state,
                password: newPassword
            }
        case actionTypes.USE_SYMBOLS:
            return {
                ...state,
                options: {
                    ...state.options,
                    symbols: !state.options.symbols
                }
            }
        case actionTypes.USE_NUMBERS:
            return {
                ...state,
                options: {
                    ...state.options,
                    numbers: !state.options.numbers
                }
            }
        default:
            return state;
    }
}

export default reducer;