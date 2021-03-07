import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

const initialState = {
    data: [],
}

const reducer = function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                requesting: true,
                successful: false
            }
        case LOGIN_SUCCESS:
            return {
                requesting: false,
                successful: true
            }
        case LOGIN_ERROR:
            return {
                requesting: false,
                successful: false
            }
        default:
            return state;
    }
}

export default reducer;