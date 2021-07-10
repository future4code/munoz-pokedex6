import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { 
    CardContainer, 
    // Img,
    // PokemonImg,
    // ButtonsContainer
   
} from './styled';
import { goToDetailsPage } from "../../route/coordinator";
import GlobalStateContext from "../../global/GlobalStateContext";

export const CardPokemon = (props)=> {
    const history = useHistory();
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(
      GlobalStateContext
    );
  
    const addToPokedex = () => {
      const pokeIndex = pokemons.findIndex(
        (item) => item.name === props.pokemon.name
      );
      const newPokemonsList = [...pokemons];
      newPokemonsList.splice(pokeIndex, 1);
      const orderedPokemons = newPokemonsList.sort((a, b) => {
        return a.id - b.id;
      });
  
      const newPokedexList = [...pokedex, props.pokemonmon];
      const orderedPokedex = newPokedexList.sort((a, b) => {
        return a.id - b.id;
      });
  
      setPokedex(orderedPokedex);
      setPokemons(orderedPokemons);
    };
  
    const removeFromPokedex = () => {
      const pokeIndex = pokedex.findIndex(
        (item) => item.name === props.pokemon.name
      );
  
      const newPokedexList = [...pokedex];
      newPokedexList.splice(pokeIndex, 1);
      const orderedPokedex = newPokedexList.sort((a, b) => {
        return a.id - b.id;
      });
  
      const newPokemonsList = [...pokemons, props.pokemon];
      const orderedPokemons = newPokemonsList.sort((a, b) => {
        return a.id - b.id;
      });
  
      setPokedex(orderedPokedex);
      setPokemons(orderedPokemons);
    };
  
    return (
      <CardContainer>
        <div>
          <img
            src={props.pokemon && props.pokemon.sprites.front_default}
            alt={props.pokemon.name}
          />
        </div>
        <div>
          <button onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
            {props.isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
          </button>
          <button
            onClick={() =>
              goToDetailsPage(history, props.pokemon.name, props.isPokedex)
            }
          >
            Ver detalhes
          </button>
        </div>
      </CardContainer>
    );
}