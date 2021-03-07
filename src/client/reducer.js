import { CLIENT_SET, CLIENT_UNSET } from './constants';

const initialState = {
    id: null,
    token: null
}

const reducer = function clientReducer (state = initialState, action) {
    switch (action.type) {
        case CLIENT_SET:
            console.log("Client set");
            return {
                //id: action.token.userId, //double-check if this actually exists
                id: 1,
                username: action.username
            }
        
        case CLIENT_UNSET:
            return {
                id: null,
                username: null
            }
        
        default:
            return state
    }
}

export default reducer