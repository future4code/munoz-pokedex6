import styled from "styled-components";

export const HeaderContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #FA2C11;
  height: 20vh;

  @media (max-width:736px){
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: 40vh;
  }
`

export const TituloPokemon = styled.img`
  width: 25vw;
  height: auto;
  max-height: 18vh;


  @media(max-width:736px){
    width: 70vw;
    margin: 10px;
  }

`

export const Button = styled.button`
  width: 168px;
  height: 45px;
  left: 63px;
  top: 70px;

  background: #F0E921;
  border-radius: 360px;

  font-family: Wendy One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  border: none;

  color: #000000;
  &:hover{
    box-shadow: 5px 10px 18px #EEDD82;
    
    cursor: pointer;
  }
`
