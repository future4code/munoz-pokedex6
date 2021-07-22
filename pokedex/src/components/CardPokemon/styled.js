import styled from "styled-components";
import { backgroundCard } from "../../constants/colors";


export const CardContainer = styled.div` 
    height: 30vh;
    width: 250px;
    margin: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: grid;
    grid-template-rows: 90% 10%;
`

export const Img = styled.img`
    height: 60%;
`
export const PokemonImg = styled.div`
    background: ${backgroundCard};
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: center;
    border-radius: 30px;

    &:hover{
        box-shadow: 5px 10px 18px gray;
        
        cursor: pointer;
    }
  
`
    
export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
`

export const Button = styled.button`
    width: 120px;
    height: 39px;
    left: 892px;
    margin-top: 1px;

    background: #FA2C11;
    border-radius: 360px;

    font-family: Wendy One;
    font-style: normal;
    font-weight: normal;
    font-size: 16px; 

    text-align: center;
    border:none;

    color: #FFFFFF;
    &:hover{
        box-shadow: 5px 10px 18px gray;
        cursor: pointer;
    }

`
export const Name = styled.p`
    width: 96px;
    height: 21px;
    left: 513px;
    top: 534px;

    font-family: Wendy One;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
`