import styled from "styled-components";



export const HomePageContainer = styled.main`
  width: 98vw;
  height: 50vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: auto;
  @media (max-width:736px){
    overflow-y: none;
  }

`
export const Label = styled.label`
  display: flex;
  align-items:center;
  justify-content: center;
  margin-top: 2px;
`

export const Busca = styled.input`
  display:flex;
  width: 200px;
  height: 20px;
  left: 596px;
  text-align: center;
  outline:none;
  background: rgba(240, 233, 33, 0.5);
  border-radius: 150px;
  border:none;
  font-family: Wendy One;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  padding: 5px;
`
export const H3 = styled.h3` 
  width: 59px;
  height: 21px;
  left: 520px;
  padding:10px;
  font-family: Wendy One;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
 
`