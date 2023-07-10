import {
    LOADING_POKEMONS,
    SET_ACCESS,
} from './types';
import axios from 'axios';

export const loadingPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios('http://localhost:3001/pokemons');
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