import {
  FETCH_POKEMON_PENDING,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_REJECT,
  FETCH_POKEMON_PENDING_ID,
  FETCH_POKEMON_SUCCESS_ID,
  FETCH_POKEMON_REJECT_ID
} from "../actions/actionType";

const inistialState = {
  pokemon: [],
  isLoading: true,
  errroMessage: [],
  pokemonId: [],
};
function reducerPokemon(state = inistialState, action) {
  switch (action.type) {
    case FETCH_POKEMON_PENDING:
      return {
        ...state,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemon: action.payload,
      };
    case FETCH_POKEMON_REJECT:
      return {
        ...state,
        isLoading: false,
        errroMessage: action.payload,
      };

      case FETCH_POKEMON_PENDING_ID:
      return {
        ...state,
      };
    case FETCH_POKEMON_SUCCESS_ID:
      return {
        ...state,
        isLoading: false,
        pokemonId: action.payload
      };
    case FETCH_POKEMON_REJECT_ID:
      return {
        ...state,
        isLoading: false,
        errroMessage: action.payload,
      };
    default:
      return state;
  }
}

 export default reducerPokemon