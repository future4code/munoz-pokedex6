import React from 'react'
import { useHistory } from "react-router-dom"
import { goToPokedexPage } from '../../route/coordinator'
import { HeaderContainer, TituloPokemon, Button } from './styled'
import AudioPlayer from 'material-ui-audio-player'
import Pokemon from '../../img/pokemon.png'


export const Header = ({ leftButtonFunction, title, showRightButton }) => {
  const history = useHistory();

  const leftButtonTitle = () => {
    switch (title) {
      case "Lista de Pokémons":
        return "Ir para Pokedex";
      case "Pokédex":
        return "Voltar para lista de pokemons";
      default:
        return "Voltar";
    }
  };
  return (
    <HeaderContainer>
      <Button onClick={leftButtonFunction}>
        {leftButtonTitle()}
      </Button>
      
        <TituloPokemon src={Pokemon} />

      
      <AudioPlayer
                    elevation={1}
                    width="10%"
                    height="5%"
                    variation="primary"
                    spacing={1}
                    download={false}
                    autoplay={true}
                    order="standart"
                    preload="auto"
                    loop={false}
                    src={"https://drive.google.com/u/0/uc?id=1nu4NSa-DC-T6CDKQpBEES96JGdt-JyzA&export=.mp3"}
                />
                
      {/* {showRightButton && (
          <button onClick={() => goToPokedexPage(history)}>
            Ir para pokedex
          </button>
        )} */}
    </HeaderContainer>)
}
