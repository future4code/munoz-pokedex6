import React from 'react';
import { 
    CardContainer, 
    // Img,
    // PokemonImg,
    // ButtonsContainer
   
} from './styled';

export const CardPokemon = (pokemon)=> {
    return (
        <CardContainer>
            {/* <Img>   */}
            <img
                src={pokemon.sprites && pokemon.sprites.front_default}
                alt={pokemon.name}
            />
            {/* </Img> */}
            <div>
                <button >Adicionar</button>
                <button >Detalhes</button>
            </div>
            
            
        </CardContainer>
        
    )
}