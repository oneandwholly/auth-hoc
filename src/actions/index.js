import { CHANGE_AUTH } from './index';

export function authenticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}