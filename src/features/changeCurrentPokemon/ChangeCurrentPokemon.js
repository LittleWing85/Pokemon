import { useDispatch, useSelector } from "react-redux";
import { currentPokemonChanged } from "./changeCurrentPokemonSlice";

export function ChangeCurrentPokemon() {
    const currentPokemon = useSelector((state) => state.currentPokemon.name);
    const dispatch = useDispatch();

    function onSubmitChangePokemon(event) {
        event.preventDefault();
        const changedName = event.target.changePokemon.value;
        dispatch(currentPokemonChanged({ changedName }));
    }

    return (
        <form onSubmit={onSubmitChangePokemon}>
            <label htmlFor="changePokemon">
                Please insert the Pokemon you're interested in
            </label>
            <input
                type="text"
                id="changePokemon"
                name="changePokemon"
                defaultValue={currentPokemon}
            />
            <button>Submit Pokemon</button>
        </form>
    );
}
