import { LOGIN_REQUEST } from './constants';

export const loginRequest = function loginRequest({ username, hosting }) {
    console.log("REQUEST: ", username, hosting);
    return {
        type: LOGIN_REQUEST,
        username,
        hosting
    }
}
