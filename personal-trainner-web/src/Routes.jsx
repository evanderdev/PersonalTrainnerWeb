import React from 'react';
import {  BrowserRouter, Route  } from 'react-router-dom';

import Personal from '../src/Pages/Personal';

function Routes () {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Personal} />
        </BrowserRouter>
    )
}

export default Routes;