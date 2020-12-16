import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProductsView from './views/ProductsView';
import CartView from './views/CartView';
import DetailedProductView from './views/DetailedProductView';
import ProfileView from './views/UserProfileView';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/profile" exact component={ProfileView}></Route>
          <Route
            exact
            path="/product/:id"
            component={DetailedProductView}
          ></Route>
          <Route exact path="/cart" component={CartView}></Route>
          <Route exact path="/" component={ProductsView}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
