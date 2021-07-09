import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
// import { Router } from './route/Router.js';
import styled from 'styled-components';

import {HomePage} from '../pages/HomePage.js';
import {PokedexPage} from '../pages/PokedexPage.js';
import {DetailsPage} from '../pages/DetailsPage.js';

export const Router = ()=> {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'}>
              <HomePage/>
            </Route>
           
            <Route exact path={'/pokedex/list'}>
              <PokedexPage/>
            </Route>
  
            <Route exact path={'/pokedexDetails/id'}>
              <DetailsPage/>
            </Route>
             
          </Switch>
        </BrowserRouter>
        
    );
  }