import {
    LOADING_POKEMONS,
    SET_ACCESS,
} from './types';
const initialState = {
    pokemons: [],
    access: false
}
const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING_POKEMONS:
            return {
                ...state,
                pokemons: payload
            }
        case SET_ACCESS:
            return {
                ...state,
                access: payload
            }
        default: return { ...state }
    }
};
export default rootReducer;