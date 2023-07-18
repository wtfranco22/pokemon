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
    SHOW_MODAL_POKEMON,
    SET_ORDER_POKEMONS,
} from './types';

const initialState = {
    access: false,
    showModal: false,
    pokemons: [],
    allTypes: [],
    pokemonsByStorage: [],
    pokemonsByTypes: [],
    pokemonsByOrder: [],
    updatedShowPokemons: [],
    filterByStorage: 'all',
    filterByType: ['all'],
    filterByOrder: 'default',
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
                pokemonsByOrder: payload,
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
            };
        case SHOW_MODAL_POKEMON:
            return {
                ...state,
                showModal: payload
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
            let filters = [];
            if ((state.filterByType[0] === 'all')) {
                alert(state.filterByType);
                filters = (payload) ? [payload] : state.filterByType;
            } else {
                filters = ([...state.filterByType, payload])
            };
            let updateByType = [];
            if (filters[0] === 'all') {
                updateByType = state.pokemonsByStorage;
            } else {
                updateByType = state.pokemonsByStorage.filter(pokemon =>
                    filters.every(filter => pokemon.types.some(type => type.name === filter))
                );
            };
            return {
                ...state,
                filterByType: filters,
                quantityPages: Math.round(updateByType.length / state.quantityPokemons),
                pokemonsByTypes: updateByType,
            };
        case SET_ORDER_POKEMONS:
            let filterOrders = [];
            switch (payload || state.filterByOrder) {
                case 'A-Z':
                    filterOrders = [...state.pokemonsByTypes].sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'Z-A':
                    filterOrders = [...state.pokemonsByTypes].sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'ATTACK_ASC':
                    filterOrders = [...state.pokemonsByTypes].sort((a, b) => a.attack - b.attack);
                    break;
                case 'ATTACK_DESC':
                    filterOrders = [...state.pokemonsByTypes].sort((a, b) => b.attack - a.attack);
                    break;
                default:
                    filterOrders = state.pokemonsByTypes;
                    break;
            };
            return {
                ...state,
                pokemonsByOrder: filterOrders,
                filterByOrder: payload || state.filterByOrder
            }
        case SET_INDEX_PAGE:
            let first = (payload - 1) * state.quantityPokemons;
            let last = payload * state.quantityPokemons;
            let update = state.pokemonsByOrder.slice(first, last);
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