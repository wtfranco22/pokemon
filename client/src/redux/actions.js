import {
    URL,
    LOADING_POKEMONS,
    SET_ACCESS,
    GET_POKEMON_DETAIL,
    CLEAN_POKEMON_DETAIL,
    CREATE_POKEMON,
    SET_INDEX_PAGE,
    LOADING_TYPES,
    SET_TYPE_POKEMONS,
    SET_STORAGE_POKEMONS,
    SHOW_MODAL_POKEMON,
    SET_ORDER_POKEMONS
} from './types';
import axios from 'axios';

export const loadingPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(URL);
            await dispatch({
                type: LOADING_POKEMONS,
                payload: data
            });
        } catch (error) {
            console.log(error.message);
        };
    };
};

export const loadingTypes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios('http://localhost:3001/types');
            await dispatch({
                type: LOADING_TYPES,
                payload: data
            });
        } catch (error) {
            alert(error.message);
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
            await dispatch({
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

export const createPokemon = (pokemon) => {
    return async (dispatch) => {
        try {
            console.log(pokemon);
            const { data } = await axios.post(URL, pokemon);
            await dispatch({
                type: CREATE_POKEMON,
                payload: data
            });
            await dispatch(setStoragePokemons(false));
        } catch (error) {
            alert(error.message);
        };
    };
};

export const setIndexPage = (index) => {
    return { type: SET_INDEX_PAGE, payload: index };
};

export const setTypesPokemons = (type) => {
    return async (dispatch) => {
        await dispatch({ type: SET_TYPE_POKEMONS, payload: type });
        await dispatch({ type: SET_ORDER_POKEMONS, payload: false });
        await dispatch(setIndexPage(1));
    };
};

export const setStoragePokemons = (storage) => {
    return async (dispatch) => {
        await dispatch({ type: SET_STORAGE_POKEMONS, payload: storage });
        await dispatch({ type: SET_TYPE_POKEMONS, payload: false });
        await dispatch({ type: SET_ORDER_POKEMONS, playload: false });
        await dispatch(setIndexPage(1));
    };
};

export const setOrderPokemons = (order) => {
    return async (dispatch) => {
        await dispatch({ type: SET_ORDER_POKEMONS, payload: order });
        await dispatch(setIndexPage(1));
    };
};

export const getPokemonByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${URL}?name=${name}`);
            await dispatch({
                type: GET_POKEMON_DETAIL,
                payload: data
            });
            await dispatch(setShowModal(true));
        } catch (error) {
            alert(error.message)
        };
    };
};

export const setShowModal = (bool) => {
    return { type: SHOW_MODAL_POKEMON, payload: bool };
};