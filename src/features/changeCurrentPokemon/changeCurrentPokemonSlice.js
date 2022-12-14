import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "pikachu" };

const changeCurrentPokemonSlice = createSlice({
    name: "changeCurrentPokemonSlice",
    initialState,
    reducers: {
        currentPokemonChanged(state, action) {
            state.name = action.payload.changedName;
        },
    },
});

export const { currentPokemonChanged } = changeCurrentPokemonSlice.actions;
export default changeCurrentPokemonSlice.reducer;
