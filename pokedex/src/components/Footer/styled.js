import styled from "styled-components";

export const FooterContainer = styled.main`
  display: flex;
  align-items:center;
  justify-content: space-around;
  padding: 10px;
  background-color: #FA2C11;
  flex-direction: row;

  @media(min-width: 414px) and (max-width:736px){
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-right:15px;
  }
`

export const DouglasImg = styled.img`
  width: 90px;
  margin: 19px;
`
export const RachelImg = styled.img`
  width: 128px;

`
export const TalesImg = styled.img`
  width: 128px;

`