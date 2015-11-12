import React from 'react';
import Main from '../components/main/Main';
import Home from '../components/home/Home';
import Aanschaf from '../components/aanschaf/Aanschaf';

import { Router, DefaultRoute, Route } from 'react-router';

export default (
    <Route name="app" path="/" handler={Main}>
        <DefaultRoute handler={Home} />
        <Route name="aanschaf" path="aanschaf" handler={Aanschaf} />
        <Route name="aanschafSubDomain" path="aanschaf/:subDomain" handler={Aanschaf} />
    </Route>
    );
