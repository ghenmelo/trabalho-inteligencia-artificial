import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TelaInicial from './Telas/TelaInicial'
import Resolucao from './Telas/TelaResolucao'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={TelaInicial} ></Route>
            <Route exact path="/resolucao" component={Resolucao}  ></Route>
            <Route component={() => { return (<div><h1>Page 404 !!!</h1></div>) }} ></Route>
        </Switch>
    </ BrowserRouter>
)

export default Routes;
