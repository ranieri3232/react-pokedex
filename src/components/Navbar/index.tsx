import React from 'react';
import { useLocation } from 'react-router';
import { ReactComponent as PokeballSvg } from '../../assets/pokeball.svg';
import './styles.scss';

// eslint-disable-next-line import/prefer-default-export
export function Navbar() {
  const location = useLocation();
  return (
    <header>
      <ul className="nav-bar">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <PokeballSvg />
          <a href="/">Home</a>
        </li>
        <li className={location.pathname === '/generations' ? 'active' : ''}><a href="/generations">Generations</a></li>
        <li className={location.pathname === '/favorites' ? 'active' : ''}><a href="/favorites">Favorites</a></li>
        <li className={location.pathname === '/about' ? 'active' : ''}><a href="/about">About</a></li>

      </ul>
    </header>
  );
}
