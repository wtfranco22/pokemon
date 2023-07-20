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
    SET_ORDER_POKEMONS,
    SHOW_MODAL_MSG
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
            await dispatch(setShowMsg({ show: true, type: 'loading', msg: '' }));
            const { data } = await axios(`${URL}/${id}`);
            await dispatch({
                type: GET_POKEMON_DETAIL,
                payload: data
            });
        } catch (error) {
            await dispatch(setShowMsg({ show: true, type: 'message', msg: error.response.data.error }));
        } finally {
            setTimeout(() => {
                dispatch(setShowMsg({ show: false, type: '', msg: '' }));
            }, 750)
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
            await dispatch(setShowMsg({ show: true, type: 'loading', msg: '' }));
            const { data } = await axios.post(URL, pokemon);
            await dispatch({
                type: CREATE_POKEMON,
                payload: data
            });
            await dispatch(setStoragePokemons(false));
            await dispatch(setShowMsg({ show: true, type: 'message', msg: 'New pokemon created!' }));
        } catch (error) {
            await dispatch(setShowMsg({ show: true, type: 'message', msg: error.response.data.error }));
        }
    };
};

export const setIndexPage = (index) => {
    return async (dispatch) => {
        await dispatch(setShowMsg({ show: true, type: 'loading', msg: '' }));
        await dispatch({ type: SET_INDEX_PAGE, payload: index });
        setTimeout(() => {
            dispatch(setShowMsg({ show: false, type: '', msg: '' }));
        }, 750);
    }
};

export const setTypesPokemons = (type) => {
    return async (dispatch) => {
        await dispatch(setShowMsg({ show: true, type: 'loading', msg: '' }));
        await dispatch({ type: SET_TYPE_POKEMONS, payload: type });
        await dispatch({ type: SET_ORDER_POKEMONS, payload: false });
        await dispatch(setIndexPage(1));
        setTimeout(() => {
            dispatch(setShowMsg({ show: false, type: '', msg: '' }));
        }, 750);
    };
};

export const setStoragePokemons = (storage) => {
    return async (dispatch) => {
        await dispatch(setShowMsg({ show: true, type: 'loading', msg: '' }));
        await dispatch({ type: SET_STORAGE_POKEMONS, payload: storage });
        await dispatch({ type: SET_TYPE_POKEMONS, payload: false });
        await dispatch({ type: SET_ORDER_POKEMONS, playload: false });
        await storage ? dispatch(setIndexPage(1)) : dispatch(setIndexPage(false));
    };
};

export const setOrderPokemons = (order) => {
    return async (dispatch) => {
        await dispatch(setShowMsg({ show: true, type: 'loading', msg: '' }));
        await dispatch({ type: SET_ORDER_POKEMONS, payload: order });
        await dispatch(setIndexPage(1));
        setTimeout(() => {
            dispatch(setShowMsg({ show: false, type: '', msg: '' }));
        }, 750);
    };
};

export const getPokemonByName = (name) => {
    return async (dispatch) => {
        try {
            await dispatch(setShowMsg({ show: true, type: 'loading', msg: '' }));
            const { data } = await axios(`${URL}?name=${name}`);
            await dispatch({
                type: GET_POKEMON_DETAIL,
                payload: data
            });
            await dispatch(setShowModal(true));
            await dispatch(setShowMsg({ show: false, type: '', msg: '' }));
        } catch (error) {
            await dispatch(setShowMsg({ show: true, type: 'message', msg: error.response.data.error }));
        };
    };
};

export const setShowModal = (bool) => {
    return { type: SHOW_MODAL_POKEMON, payload: bool };
};

export const setShowMsg = (msg) => {
    return { type: SHOW_MODAL_MSG, payload: msg };
}