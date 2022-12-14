import "./pokemonInfo.css";
import { useSelector } from "react-redux";
import { useGetPokemonByNameQuery } from "../../app/pokemonApi";

export function PokemonInfo() {
    const currentPokemon = useSelector((state) => state.currentPokemon);
    const { data, error, isLoading } = useGetPokemonByNameQuery(
        currentPokemon.name
    );

    return (
        <div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <div className="pokemonImageContainer">
                        <img
                            src={data.sprites.front_shiny}
                            alt={data.species.name}
                        />
                    </div>
                </>
            ) : null}
        </div>
    );
}
