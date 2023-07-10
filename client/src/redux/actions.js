import {
    URL,
    LOADING_POKEMONS,
    SET_ACCESS,
    GET_POKEMON_DETAIL,
    CLEAN_POKEMON_DETAIL
} from './types';
import axios from 'axios';

export const loadingPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(URL);
            dispatch({
                type: LOADING_POKEMONS,
                payload: data
            });
        } catch (error) {
            console.log(error.message);
        };
    };
};

export const setAccess = (boolean) => {
    return {
        type: SET_ACCESS,
        payload: boolean
    };
};

export const getPokemonDetail = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${URL}/${id}`);
            dispatch({
                type: GET_POKEMON_DETAIL,
                payload: data
            });
        } catch (error) {
            alert(error.message);
        };
    };
};

export const cleanPokemonDetail = () => {
    return {
        type: CLEAN_POKEMON_DETAIL
    };
};