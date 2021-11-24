import React from 'react';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FavoritePokemonContextProvider } from './contexts/FavoritePokemonContextProvider';
import { About } from './pages/About';
import { Details } from './pages/Details';
import { Favorites } from './pages/Favorites';
import { GenerationPage } from './pages/GenerationPage';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import './styles/global.scss';
import './styles/responsive.scss';

type NavRoutePorps = {
  // eslint-disable-next-line react/require-default-props
  exact?: boolean | undefined;
  path: string;
  component: React.FC;
}
const NavRoute = ({ path, component: Teste, exact = false }:NavRoutePorps) => (
  <>
    <Route
      exact={exact}
      path={path}
      render={() => (
        <>
          <Navbar />
          <Teste />
        </>
      )}
    />
  </>
);

export function App() {
  return (
    <BrowserRouter>
      <FavoritePokemonContextProvider>
        <Switch>

          <Route exact path="/"><Redirect to="/page/1" /></Route>
          <NavRoute exact path="/page/:id" component={Home} />
          <NavRoute path="/generations/:gen" component={GenerationPage} />
          <NavRoute path="/favorites" component={Favorites} />
          <NavRoute path="/details/:id" component={Details} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />

        </Switch>
      </FavoritePokemonContextProvider>
    </BrowserRouter>
  );
}

export default App;
