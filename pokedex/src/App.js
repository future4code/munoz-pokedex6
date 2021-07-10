import React from "react";
import { Router } from './route/Router.js';
import GlobalState from './global/GlobalState';



export default function App() {

  return (

    <>
      <h1>POKEMONS</h1>
     
      <GlobalState>
        <Router />
      </GlobalState>
      
    </>
  );
}