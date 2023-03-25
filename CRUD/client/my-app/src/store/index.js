import { createStore, applyMiddleware } from "redux";
import reducerPokemon from "./reducer/reducerPokemon";
import thunk from "redux-thunk";
let store = createStore(reducerPokemon, applyMiddleware(thunk));

export default store;
