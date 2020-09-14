import React from 'react';
import {  BrowserRouter, Route  } from 'react-router-dom';

import Landing from '../src/Pages/Landing';
import AboutMe from '../src/Pages/AboutMe';
import Plans from '../src/Pages/Plans';
import Studies from '../src/Pages/Studies';
import Benefits from '../src/Pages/Benefits';

function Routes () {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/sobremim" exact component={AboutMe} />
        <Route path="/planos" exact component={Plans} />
        <Route path="/cursoseformacao" exact component={Studies} />
        <Route path="/beneficios" exact component={Benefits} />
        </BrowserRouter>
    )
}

export default Routes;