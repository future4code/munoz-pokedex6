import styled from "styled-components";
import { backgroundCard } from "../../constants/colors";

export const PokeInfosContainer = styled.main`
  height: 80vh;
  margin: 20px 10vw;
  display:flex;
  justify-content: space-evenly;
`

export const ImagesContainer = styled.div`
  align-self: center;
  height: 75%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  
`

export const ImgWrapper = styled.img`
  height: 25vh;
  background: ${backgroundCard};
  border-radius:30px;
  &:hover{
    box-shadow: 5px 10px 18px gray;}
`

export const StatsContainer = styled.div`
  background: ${backgroundCard};
  align-self: center;
  height: 75%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  font-family: Wendy One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #000000;
  border-radius:30px;
  &:hover{
    box-shadow: 5px 10px 18px gray;
  }
`

export const TitleContainer = styled.div`
    align-self: center;
    padding:10px;
    font-family: Wendy One;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #FFFFFF;

    @media(min-width: 414px) and (max-width:736px){
      display: flex;
      flex-direction: column;
      margin-top:50px;
    }
`

export const TypeAndMovesContainer = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-family: Wendy One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #000000;
  padding: 10px;

  @media(min-width: 414px) and (max-width:736px){
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

`

export const TypesContainer = styled.div`
  background: ${backgroundCard};
  height: 10%;
  display: flex;
  justify-content: space-around;

  border-radius:30px;
  &:hover{
    box-shadow: 5px 10px 18px gray;
  }

  @media(min-width: 414px) and (max-width:736px){
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

`
export const MovesContainer = styled.div`

    background: ${backgroundCard};
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;

    border-radius:30px;
    &:hover{
      box-shadow: 5px 10px 18px gray;
    }

    @media(min-width: 414px) and (max-width:736px){
       display: flex;
       flex-direction: column;
       justify-content: center;
    }
        
    
`

export const H1 = styled.h1`
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: Wendy One;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    margin-top:50px;
    color: #000000;


`