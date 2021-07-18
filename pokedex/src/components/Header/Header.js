import React from 'react'
import { useHistory } from "react-router-dom"
import { goToPokedexPage } from '../../route/coordinator'
import { HeaderContainer } from './styled'
import AudioPlayer from 'material-ui-audio-player'

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
      <button onClick={leftButtonFunction}>
        {leftButtonTitle()}
      </button>
      <h1>{title}</h1>
      <AudioPlayer
                    elevation={1}
                    width="15%"
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
