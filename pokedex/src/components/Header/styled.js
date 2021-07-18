import styled from "styled-components";

export const HeaderContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #FA2C11;

  @media(min-width: 414px) and (max-width:736px){
    display: flex;
    flex-direction: column;
    height:380px;
}
`

export const TituloPokemon = styled.img`
  width: 431px;
  height: 159px;
  left: 504px;
  top: 12px;

  @media(min-width: 414px) and (max-width:736px){
    display: flex;
    flex-direction: column;
    width: 331px;
    height: 159px;
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
`
