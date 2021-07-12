import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { Header } from '../../components/Header/Header';
import { CardPokemon } from '../../components/CardPokemon/CardPokemon';
import GlobalStateContext from '../../global/GlobalStateContext';
import { goToHomePage } from '../../route/coordinator';

export const PokedexPage = ()=>{
    const { pokedex } = useContext(GlobalStateContext);
    const history = useHistory();
  
    return (
      <>
        <Header
          title={"Pokédex"}
          leftButtonFunction={() => goToHomePage (history)}
        />
        <div>
          {pokedex &&
            pokedex.map((pokemon) => {
              return <CardPokemon isPokedex key={pokemon.name} pokemon={pokemon} />;
            })}
        </div>
      </>
    )
  }