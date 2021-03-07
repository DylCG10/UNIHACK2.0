import { CLIENT_SET, CLIENT_UNSET } from './constants';

export function setClient (username) {
    return {
        type: CLIENT_SET,
        username,
    }
}

export function unsetClient () {
    return {
        type: CLIENT_UNSET,
    }
}