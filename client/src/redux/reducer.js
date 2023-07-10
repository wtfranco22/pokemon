import {
    LOADING_POKEMONS,
    SET_ACCESS,
    GET_POKEMON_DETAIL,
    CLEAN_POKEMON_DETAIL,
} from './types';
const initialState = {
    pokemons: [],
    pokemonDetail: null,
    access: false
};
const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING_POKEMONS:
            return {
                ...state,
                pokemons: payload
            };
        case SET_ACCESS:
            return {
                ...state,
                access: payload
            };
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: payload
            }
        case CLEAN_POKEMON_DETAIL:
            return{
                ...state,
                pokemonDetail:null
            }
        default: return { ...state };
    };
};
export default rootReducer;