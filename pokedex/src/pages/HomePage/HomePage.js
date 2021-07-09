import React, { useContext } from 'react';
import { CardPokemon } from '../../components/CardPokemon/CardPokemon';
import { Header} from '../../components/Header/Header';
import { CardContainer } from '../../components/CardPokemon/styled';
import GlobalStateContext from '../../global/GlobalStateContext';

export const HomePage = ()=>{
    const {dataPokemon} = useContext(GlobalStateContext)

    return (
        <>  
        <Header />
        <CardPokemon>
           {
               dataPokemon.map((pokemon) =>{
                return <CardPokemon key={pokemon.name} poke={pokemon}/>
               })
           }
        </CardPokemon>
         
        </>
    )

}