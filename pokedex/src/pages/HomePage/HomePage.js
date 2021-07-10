import React, { useContext } from 'react';
import { CardPokemon } from '../../components/CardPokemon/CardPokemon';
import { Header} from '../../components/Header/Header';
import GlobalStateContext from '../../global/GlobalStateContext';
import {goToPokedexPage} from '../../route/coordinator'
import { useHistory } from "react-router-dom";


export const HomePage = ()=>{
    const {dataPokemon} = useContext(GlobalStateContext)
    const history = useHistory()
    
    return (
        <>  
        <Header 
        title={"Lista de Pokémons"}
        leftButtonFunction = {() => goToPokedexPage(history)}
        />
        <div>
           {dataPokemon &&
               dataPokemon.map((pokemon) =>{
                return <CardPokemon key={pokemon.name} pokemon={pokemon}/>
               })
           }
        </div>
         
        </>
    )

}
