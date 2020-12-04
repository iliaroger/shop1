import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProductsView from './views/ProductsView';
import CartView from './views/CartView';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/cart" component={CartView}></Route>
          <Route exact path="/" component={ProductsView}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
