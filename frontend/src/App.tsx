import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProductsView from './views/ProductsView';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductsView}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
