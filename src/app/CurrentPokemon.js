import { useSelector } from "react-redux";

export function CurrentPokemon() {
    const currentPokemon = useSelector((state) => state.currentPokemon);

    return <h1>{currentPokemon.name}</h1>;
}
