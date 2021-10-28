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
import './styles/global.scss';

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <FavoritePokemonContextProvider>
          <Route exact path="/"><Redirect to="/page/1" /></Route>
          <Route exact path="/page/:id" component={Home} />
          <Route path="/generations" component={GenerationPage} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/details/:id" component={Details} />
        </FavoritePokemonContextProvider>
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
