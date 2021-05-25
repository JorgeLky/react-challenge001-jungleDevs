import React from 'react';
import {
  InitialPage,
  RegisterPage,
  DetailsPage,
} from './pages/index';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
          <Route exact path="/home" component={ InitialPage } />
          <Route exact path="/register" component={ RegisterPage } />
          <Route exact path='/details-values' component={ DetailsPage } />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
