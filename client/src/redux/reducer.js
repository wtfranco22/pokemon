import {
    LOADING_POKEMONS,
    SET_ACCESS,
    GET_POKEMON_DETAIL,
    CLEAN_POKEMON_DETAIL,
    CREATE_POKEMON,
} from './types';
const initialState = {
    pokemons: [
        {
            "id": 1,
            "name": "bulbasaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "weight": 69,
            "height": 7,
            "types": [
                {
                    "name": "grass"
                },
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 905,
            "name": "enamorus-incarnate",
            "image": "https://thenounproject.com/api/private/icons/774651/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
            "hp": 74,
            "attack": 115,
            "defense": 70,
            "weight": 480,
            "height": 16,
            "types": [
                {
                    "name": "fairy"
                },
                {
                    "name": "flying"
                }
            ]
        },
        {
            "id": 2,
            "name": "ivysaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
            "hp": 60,
            "attack": 62,
            "defense": 63,
            "weight": 130,
            "height": 10,
            "types": [
                {
                    "name": "grass"
                },
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 3,
            "name": "venusaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
            "hp": 80,
            "attack": 82,
            "defense": 83,
            "weight": 1000,
            "height": 20,
            "types": [
                {
                    "name": "grass"
                },
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 4,
            "name": "charmander",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "weight": 85,
            "height": 6,
            "types": [
                {
                    "name": "fire"
                }
            ]
        },
        {
            "id": 5,
            "name": "charmeleon",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
            "hp": 58,
            "attack": 64,
            "defense": 58,
            "weight": 190,
            "height": 11,
            "types": [
                {
                    "name": "fire"
                }
            ]
        },
        {
            "id": 6,
            "name": "charizard",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
            "hp": 78,
            "attack": 84,
            "defense": 78,
            "weight": 905,
            "height": 17,
            "types": [
                {
                    "name": "fire"
                },
                {
                    "name": "flying"
                }
            ]
        },
        {
            "id": 7,
            "name": "squirtle",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
            "hp": 44,
            "attack": 48,
            "defense": 65,
            "weight": 90,
            "height": 5,
            "types": [
                {
                    "name": "water"
                }
            ]
        },
        {
            "id": 8,
            "name": "wartortle",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png",
            "hp": 59,
            "attack": 63,
            "defense": 80,
            "weight": 225,
            "height": 10,
            "types": [
                {
                    "name": "water"
                }
            ]
        },
        {
            "id": 9,
            "name": "blastoise",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
            "hp": 79,
            "attack": 83,
            "defense": 100,
            "weight": 855,
            "height": 16,
            "types": [
                {
                    "name": "water"
                }
            ]
        },
        {
            "id": 10,
            "name": "caterpie",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png",
            "hp": 45,
            "attack": 30,
            "defense": 35,
            "weight": 29,
            "height": 3,
            "types": [
                {
                    "name": "bug"
                }
            ]
        },
        {
            "id": 11,
            "name": "metapod",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png",
            "hp": 50,
            "attack": 20,
            "defense": 55,
            "weight": 99,
            "height": 7,
            "types": [
                {
                    "name": "bug"
                }
            ]
        },
        {
            "id": 12,
            "name": "butterfree",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png",
            "hp": 60,
            "attack": 45,
            "defense": 50,
            "weight": 320,
            "height": 11,
            "types": [
                {
                    "name": "bug"
                },
                {
                    "name": "flying"
                }
            ]
        },
        {
            "id": 13,
            "name": "weedle",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png",
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "weight": 32,
            "height": 3,
            "types": [
                {
                    "name": "bug"
                },
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 14,
            "name": "kakuna",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png",
            "hp": 45,
            "attack": 25,
            "defense": 50,
            "weight": 100,
            "height": 6,
            "types": [
                {
                    "name": "bug"
                },
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 15,
            "name": "beedrill",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png",
            "hp": 65,
            "attack": 90,
            "defense": 40,
            "weight": 295,
            "height": 10,
            "types": [
                {
                    "name": "bug"
                },
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 16,
            "name": "pidgey",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png",
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "weight": 18,
            "height": 3,
            "types": [
                {
                    "name": "normal"
                },
                {
                    "name": "flying"
                }
            ]
        },
        {
            "id": 17,
            "name": "pidgeotto",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png",
            "hp": 63,
            "attack": 60,
            "defense": 55,
            "weight": 300,
            "height": 11,
            "types": [
                {
                    "name": "normal"
                },
                {
                    "name": "flying"
                }
            ]
        },
        {
            "id": 18,
            "name": "pidgeot",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png",
            "hp": 83,
            "attack": 80,
            "defense": 75,
            "weight": 395,
            "height": 15,
            "types": [
                {
                    "name": "normal"
                },
                {
                    "name": "flying"
                }
            ]
        },
        {
            "id": 19,
            "name": "rattata",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/19.png",
            "hp": 30,
            "attack": 56,
            "defense": 35,
            "weight": 35,
            "height": 3,
            "types": [
                {
                    "name": "normal"
                }
            ]
        },
        {
            "id": 20,
            "name": "raticate",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
            "hp": 55,
            "attack": 81,
            "defense": 60,
            "weight": 185,
            "height": 7,
            "types": [
                {
                    "name": "normal"
                }
            ]
        },
        {
            "id": 21,
            "name": "spearow",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/21.png",
            "hp": 40,
            "attack": 60,
            "defense": 30,
            "weight": 20,
            "height": 3,
            "types": [
                {
                    "name": "normal"
                },
                {
                    "name": "flying"
                }
            ]
        },
        {
            "id": 22,
            "name": "fearow",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/22.png",
            "hp": 65,
            "attack": 90,
            "defense": 65,
            "weight": 380,
            "height": 12,
            "types": [
                {
                    "name": "normal"
                },
                {
                    "name": "flying"
                }
            ]
        },
        {
            "id": 23,
            "name": "ekans",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/23.png",
            "hp": 35,
            "attack": 60,
            "defense": 44,
            "weight": 69,
            "height": 20,
            "types": [
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 24,
            "name": "arbok",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/24.png",
            "hp": 60,
            "attack": 95,
            "defense": 69,
            "weight": 650,
            "height": 35,
            "types": [
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 25,
            "name": "pikachu",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "weight": 60,
            "height": 4,
            "types": [
                {
                    "name": "electric"
                }
            ]
        },
        {
            "id": 26,
            "name": "raichu",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png",
            "hp": 60,
            "attack": 90,
            "defense": 55,
            "weight": 300,
            "height": 8,
            "types": [
                {
                    "name": "electric"
                }
            ]
        },
        {
            "id": 27,
            "name": "sandshrew",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/27.png",
            "hp": 50,
            "attack": 75,
            "defense": 85,
            "weight": 120,
            "height": 6,
            "types": [
                {
                    "name": "ground"
                }
            ]
        },
        {
            "id": 28,
            "name": "sandslash",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/28.png",
            "hp": 75,
            "attack": 100,
            "defense": 110,
            "weight": 295,
            "height": 10,
            "types": [
                {
                    "name": "ground"
                }
            ]
        },
        {
            "id": 29,
            "name": "nidoran-f",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/29.png",
            "hp": 55,
            "attack": 47,
            "defense": 52,
            "weight": 70,
            "height": 4,
            "types": [
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 30,
            "name": "nidorina",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/30.png",
            "hp": 70,
            "attack": 62,
            "defense": 67,
            "weight": 200,
            "height": 8,
            "types": [
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 31,
            "name": "nidoqueen",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/31.png",
            "hp": 90,
            "attack": 92,
            "defense": 87,
            "weight": 600,
            "height": 13,
            "types": [
                {
                    "name": "poison"
                },
                {
                    "name": "ground"
                }
            ]
        },
        {
            "id": 32,
            "name": "nidoran-m",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/32.png",
            "hp": 46,
            "attack": 57,
            "defense": 40,
            "weight": 90,
            "height": 5,
            "types": [
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 33,
            "name": "nidorino",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/33.png",
            "hp": 61,
            "attack": 72,
            "defense": 57,
            "weight": 195,
            "height": 9,
            "types": [
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 34,
            "name": "nidoking",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/34.png",
            "hp": 81,
            "attack": 102,
            "defense": 77,
            "weight": 620,
            "height": 14,
            "types": [
                {
                    "name": "poison"
                },
                {
                    "name": "ground"
                }
            ]
        },
        {
            "id": 35,
            "name": "clefairy",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png",
            "hp": 70,
            "attack": 45,
            "defense": 48,
            "weight": 75,
            "height": 6,
            "types": [
                {
                    "name": "fairy"
                }
            ]
        },
        {
            "id": 36,
            "name": "clefable",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/36.png",
            "hp": 95,
            "attack": 70,
            "defense": 73,
            "weight": 400,
            "height": 13,
            "types": [
                {
                    "name": "fairy"
                }
            ]
        },
        {
            "id": 37,
            "name": "vulpix",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/37.png",
            "hp": 38,
            "attack": 41,
            "defense": 40,
            "weight": 99,
            "height": 6,
            "types": [
                {
                    "name": "fire"
                }
            ]
        },
        {
            "id": 38,
            "name": "ninetales",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/38.png",
            "hp": 73,
            "attack": 76,
            "defense": 75,
            "weight": 199,
            "height": 11,
            "types": [
                {
                    "name": "fire"
                }
            ]
        },
        {
            "id": 39,
            "name": "jigglypuff",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/39.png",
            "hp": 115,
            "attack": 45,
            "defense": 20,
            "weight": 55,
            "height": 5,
            "types": [
                {
                    "name": "normal"
                },
                {
                    "name": "fairy"
                }
            ]
        },
        {
            "id": 40,
            "name": "wigglytuff",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/40.png",
            "hp": 140,
            "attack": 70,
            "defense": 45,
            "weight": 120,
            "height": 10,
            "types": [
                {
                    "name": "normal"
                },
                {
                    "name": "fairy"
                }
            ]
        },
        {
            "id": 41,
            "name": "zubat",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/41.png",
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "weight": 75,
            "height": 8,
            "types": [
                {
                    "name": "poison"
                },
                {
                    "name": "flying"
                }
            ]
        },
        {
            "id": 42,
            "name": "golbat",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/42.png",
            "hp": 75,
            "attack": 80,
            "defense": 70,
            "weight": 550,
            "height": 16,
            "types": [
                {
                    "name": "poison"
                },
                {
                    "name": "flying"
                }
            ]
        },
        {
            "id": 43,
            "name": "oddish",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/43.png",
            "hp": 45,
            "attack": 50,
            "defense": 55,
            "weight": 54,
            "height": 5,
            "types": [
                {
                    "name": "grass"
                },
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 44,
            "name": "gloom",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/44.png",
            "hp": 60,
            "attack": 65,
            "defense": 70,
            "weight": 86,
            "height": 8,
            "types": [
                {
                    "name": "grass"
                },
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 45,
            "name": "vileplume",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/45.png",
            "hp": 75,
            "attack": 80,
            "defense": 85,
            "weight": 186,
            "height": 12,
            "types": [
                {
                    "name": "grass"
                },
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 46,
            "name": "paras",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/46.png",
            "hp": 35,
            "attack": 70,
            "defense": 55,
            "weight": 54,
            "height": 3,
            "types": [
                {
                    "name": "bug"
                },
                {
                    "name": "grass"
                }
            ]
        },
        {
            "id": 47,
            "name": "parasect",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/47.png",
            "hp": 60,
            "attack": 95,
            "defense": 80,
            "weight": 295,
            "height": 10,
            "types": [
                {
                    "name": "bug"
                },
                {
                    "name": "grass"
                }
            ]
        },
        {
            "id": 48,
            "name": "venonat",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/48.png",
            "hp": 60,
            "attack": 55,
            "defense": 50,
            "weight": 300,
            "height": 10,
            "types": [
                {
                    "name": "bug"
                },
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 49,
            "name": "venomoth",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/49.png",
            "hp": 70,
            "attack": 65,
            "defense": 60,
            "weight": 125,
            "height": 15,
            "types": [
                {
                    "name": "bug"
                },
                {
                    "name": "poison"
                }
            ]
        },
        {
            "id": 50,
            "name": "diglett",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/50.png",
            "hp": 10,
            "attack": 55,
            "defense": 25,
            "weight": 8,
            "height": 2,
            "types": [
                {
                    "name": "ground"
                }
            ]
        },
        {
            "id": 51,
            "name": "dugtrio",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/51.png",
            "hp": 35,
            "attack": 100,
            "defense": 50,
            "weight": 333,
            "height": 7,
            "types": [
                {
                    "name": "ground"
                }
            ]
        },
        {
            "id": 52,
            "name": "meowth",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/52.png",
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "weight": 42,
            "height": 4,
            "types": [
                {
                    "name": "normal"
                }
            ]
        },
        {
            "id": 53,
            "name": "persian",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/53.png",
            "hp": 65,
            "attack": 70,
            "defense": 60,
            "weight": 320,
            "height": 10,
            "types": [
                {
                    "name": "normal"
                }
            ]
        },
        {
            "id": 54,
            "name": "psyduck",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png",
            "hp": 50,
            "attack": 52,
            "defense": 48,
            "weight": 196,
            "height": 8,
            "types": [
                {
                    "name": "water"
                }
            ]
        },
        {
            "id": 55,
            "name": "golduck",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/55.png",
            "hp": 80,
            "attack": 82,
            "defense": 78,
            "weight": 766,
            "height": 17,
            "types": [
                {
                    "name": "water"
                }
            ]
        },
        {
            "id": 56,
            "name": "mankey",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/56.png",
            "hp": 40,
            "attack": 80,
            "defense": 35,
            "weight": 280,
            "height": 5,
            "types": [
                {
                    "name": "fighting"
                }
            ]
        },
        {
            "id": 57,
            "name": "primeape",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/57.png",
            "hp": 65,
            "attack": 105,
            "defense": 60,
            "weight": 320,
            "height": 10,
            "types": [
                {
                    "name": "fighting"
                }
            ]
        },
    ],
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
            return {
                ...state,
                pokemonDetail: null
            }
        case CREATE_POKEMON:
            console.log(payload);
            return {
                ...state,
                pokemons: [...state.pokemons, payload]
            };
        default: return { ...state };
    };
};
export default rootReducer;