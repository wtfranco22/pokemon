import {
    SET_ACCESS
} from './types';
const initialState = {
    access: false
}
const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_ACCESS:
            return {
                ...state,
                access: payload
            }
        default: return { ...state }
    }
};
export default rootReducer;