import { configureStore } from "@reduxjs/toolkit";
import changeCurrentPokemonReducer from "../features/changeCurrentPokemon/changeCurrentPokemonSlice";
import { pokemonApi } from "./pokemonApi";

export const store = configureStore({
    reducer: {
        currentPokemon: changeCurrentPokemonReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
});
