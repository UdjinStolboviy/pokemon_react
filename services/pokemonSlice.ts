import {
    createSlice,
    PayloadAction,
    createAsyncThunk,
    SerializedError,
} from "@reduxjs/toolkit";

import { RootState } from "@/store";
import { IPokemon } from "@/types";


type RequestState = "pending" | "fulfilled" | "rejected";

export type PokemonState = {
    pokemon: IPokemon[];
    requestState?: RequestState;
    error?: SerializedError;
};



export const initialState: PokemonState = {
    pokemon: [],
};

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        addPokemon: (state, action) => {
            state.pokemon = [action.payload];

        },
        removePokemon: (state) => {
            state.pokemon = [];
        }

    },
});


export const { addPokemon, removePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;