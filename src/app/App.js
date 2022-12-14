import React from "react";
import "./App.css";
import { ChangeCurrentPokemon } from "../features/changeCurrentPokemon/ChangeCurrentPokemon";
import { CurrentPokemon } from "./CurrentPokemon";
import { PokemonInfo } from "../features/pokemonInfo/PokemonInfo";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <CurrentPokemon />
                <ChangeCurrentPokemon />
            </header>
            <PokemonInfo />
        </div>
    );
}

export default App;
