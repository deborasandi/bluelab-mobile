import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import ZirconiaForm from './pages/product/zirconia'

const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={ZirconiaForm} path="/produto/zirconia" exact />
    </Switch>
  );
}

export default Routes;