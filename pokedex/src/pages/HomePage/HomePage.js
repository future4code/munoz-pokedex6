import React, { useContext, useState } from 'react';

import { CardPokemon } from '../../components/CardPokemon/CardPokemon';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import GlobalStateContext from '../../global/GlobalStateContext';
import { goToPokedexPage } from '../../route/coordinator'
import { useHistory } from "react-router-dom";
import { HomePageContainer, Busca, H3, Label } from './styled';





export const HomePage = ()=>{
    const [inputName, setInputName] = useState("")
    const {dataPokemon} = useContext(GlobalStateContext)
    const history = useHistory()
    
    const onChangeName = (event) => {
        setInputName(event.target.value)
    }

    let pokeFilter = dataPokemon.filter((pokemon) => {
        if (pokemon.name.toLowerCase().includes(inputName.toLowerCase())) {
            return true 
        } else {
            return false
        }
    })
    //      pokemonFilteredPage.filter((pokemon) => {
    //      return (inputName ? dataPokemon.name.toLowerCase().includes(inputName.toLowerCase()) : true)
    // })

    return (
        <>  
        <Header 
        title={"Lista de Pokémons"}
        leftButtonFunction = {() => goToPokedexPage(history)}
        />
        <form >
            <Label>
              <H3>Busca:</H3> 
                <Busca
                  type="text"
                  value={inputName}
                  onChange={onChangeName}
                  placeholder="Nome do pokémon"
                />
            </Label>
        </form>
        <HomePageContainer>
           {pokeFilter &&
               pokeFilter.map((pokemon) =>{
                return <CardPokemon key={pokemon.name} pokemon={pokemon}/>
               })
           }
        </HomePageContainer>

        <Footer>
           
        </Footer>
       
           
       
        </>
    )

}
