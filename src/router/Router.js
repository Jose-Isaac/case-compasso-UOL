import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/:user/repos">
          {/* <ReposPage /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
