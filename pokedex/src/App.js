import React from "react";
import { Router } from './route/Router.js';
import { useHistory } from 'react-router-dom'


export default function App() {

  // const goToPokedexPage= () =>{
  //   history.push('/pokedex/list')
  // }
  return (
    <div>
       <header>
        <h1>POKEMONS</h1>
        <button >Ver minha POKEDEX</button>
      </header>

      <Router />
    </div>
  );
}

