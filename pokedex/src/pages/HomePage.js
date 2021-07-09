import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const HomePage = ()=>{

    const history = useHistory()

    const goBack= () =>{
        history.goBack()
    }

    const goToPokedexPage= () =>{
        history.push('/pokedex/list')
    }

    const goToDetailsPage = () =>{
        history.push('/pokedexDetails/id')
    }


    return (
        <>  
         
         <button onClick={goToPokedexPage}>Adicionar</button>
         <button onClick={goToDetailsPage}>Detalhes</button>

        
        </>
    )

}