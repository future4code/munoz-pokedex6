import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header';
import GlobalStateContext from '../../global/GlobalStateContext';
import { 
    TypesContainer,
    TypeAndMovesContainer,
    ImgWrapper,
    ImagesContainer,
    StatsContainer,
    TitleContainer,
    MovesContainer,
    PokeInfosContainer
} from './styled';


export const DetailsPage = ()=>{
     const [selectedPokemon, setSelectedPokemon] = useState({})
    const{name} = useParams()
    const {dataPokemon} = useContext(GlobalStateContext)

    console.log(selectedPokemon)

    useEffect(() => {
        const currentPokemon = dataPokemon.find((item) => {return item.name === name})
            setSelectedPokemon(currentPokemon)
    }, [])
    return(
        <div>
            <Header/>
            <button>Voltar</button>
            <h1>Detalhes Pokemons</h1>
            <PokeInfosContainer>
                {selectedPokemon && selectedPokemon.sprites &&
                <ImagesContainer>
                    <ImgWrapper src={selectedPokemon.sprites.front_default}/>
                    <ImgWrapper src={selectedPokemon.sprites.back_default}/>
                </ImagesContainer>
}
                <StatsContainer>
                    <TitleContainer>Poderes</TitleContainer>
                    {selectedPokemon && 
                    selectedPokemon.stats &&
                    selectedPokemon.stats.map((stat) => {
                        return(
                            <p key={stat.stat.name}>
                                <strong>{stat.stat.name}: </strong>
                                {stat.base_stat}
                            </p>
                        );
                    })}
                </StatsContainer>
                <TypeAndMovesContainer>
                    <TypesContainer>
                        {selectedPokemon && 
                        selectedPokemon.types &&
                    selectedPokemon.types.map((type) => {
                        return(
                            <p key={type.type.name}>{type.type.name}</p>
                        );
                    })  
                        }
                    </TypesContainer>
                    <MovesContainer>
                    <TitleContainer>Principais ataques</TitleContainer>
                    {selectedPokemon && 
                    selectedPokemon.moves &&
                    selectedPokemon.moves.map((move, index) => {
                        return(
                            index < 5 && <p key={move.move.name}>{move.move.name}</p>
                        );
                    })
                    }
                    </MovesContainer>
                </TypeAndMovesContainer>
            </PokeInfosContainer>
        </div>

    )
}