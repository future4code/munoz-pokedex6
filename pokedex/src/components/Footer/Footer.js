import React from 'react'
import { useHistory } from "react-router-dom"
import { goToPokedexPage } from '../../route/coordinator'
import { DouglasImg, FooterContainer, RachelImg, TalesImg } from './styled'
import Douglas from '../../img/Douglas.png'
import Rachel from '../../img/Rachel.png'
import Tales from '../../img/Tales.png'
import { Images } from './styled'


export const Footer = () => {
   
    
    return (
        <FooterContainer>
          
          <a href="https://www.linkedin.com/in/douglas-n-83b57a73/" target="_blank" rel="external"><DouglasImg src={Douglas} /></a>
          <a href="https://www.linkedin.com/in/rachel-araujo-a6594766/" target="_blank" rel="external"><RachelImg src={Rachel} /></a>
          <a href="https://www.linkedin.com/in/talessgomes/" target="_blank" rel="external"><TalesImg src={Tales} /></a>
          
        </FooterContainer>)
   }


   
    