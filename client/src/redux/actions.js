import {
    SET_ACCESS
} from './types';

export const setAccess = (boolean) => {
    return {
        type: SET_ACCESS,
        payload: boolean
    }
}