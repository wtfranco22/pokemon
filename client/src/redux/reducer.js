import {
    LOADING_POKEMONS,
    SET_ACCESS,
    GET_POKEMON_DETAIL,
    CLEAN_POKEMON_DETAIL,
    CREATE_POKEMON,
    SET_INDEX_PAGE,
    LOADING_TYPES,
    SET_TYPE_POKEMONS,
    SET_STORAGE_POKEMONS,
} from './types';

const initialState = {
    access: false,
    pokemons: [],
    allTypes: [],
    pokemonsByStorage: [],
    pokemonsByTypes: [],
    updatedShowPokemons: [],
    filterByStorage: 'all',
    filterByType: 'all',
    pokemonDetail: null,
    indexPage: 1,
    quantityPokemons: 12,
    indexfirstPokemon: 0,
    indexLastPokemon: 12,
    quantityPages: 1,
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING_POKEMONS:
            return {
                ...state,
                pokemons: payload,
                pokemonsByStorage: payload,
                pokemonsByTypes: payload,
                updatedShowPokemons: payload.slice(state.indexfirstPokemon, state.indexLastPokemon),
                quantityPages: Math.round(payload.length / state.quantityPokemons),
            };
        case LOADING_TYPES:
            return {
                ...state,
                allTypes: payload
            }
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
            return {
                ...state,
                pokemonDetail: null
            }
        case CREATE_POKEMON:
            return {
                ...state,
                pokemons: [...state.pokemons, payload]
            };
        case SET_STORAGE_POKEMONS:
            let updateByStorage = [];
            if (payload === 'all') {
                updateByStorage = state.pokemons;
            } else if (payload === 'bd') {
                updateByStorage = state.pokemons.filter((pokemon) => isNaN(pokemon.id));
            } else {
                updateByStorage = state.pokemons.filter((pokemon) => !isNaN(pokemon.id));
            };
            return {
                ...state,
                filterByStorage: payload,
                pokemonsByStorage: updateByStorage,
            };
        case SET_TYPE_POKEMONS:
            let updateByType = [];
            let filter = payload || state.filterByType;
            if (filter === 'all') {
                updateByType = state.pokemonsByStorage;
            } else {
                updateByType = state.pokemonsByStorage.filter((pokemon) =>
                    (pokemon.types.find((tipe) => tipe.name === filter))
                );
            };
            return {
                ...state,
                filterByType: filter,
                quantityPages: Math.round(updateByType.length / state.quantityPokemons),
                pokemonsByTypes: updateByType,
            };
        case SET_INDEX_PAGE:
            let first = (payload - 1) * state.quantityPokemons;
            let last = payload * state.quantityPokemons;
            let update = state.pokemonsByTypes.slice(first, last);
            return {
                ...state,
                indexPage: payload,
                indexLastPokemon: last,
                indexFirstPokemon: first,
                updatedShowPokemons: update
            };
        default: return { ...state };
    };
};
export default rootReducer;