import React from 'react';
import { useLocation } from 'react-router';
import { ReactComponent as PokeballSvg } from '../../assets/pokeball.svg';
import { ReactComponent as DownArrow } from '../../assets/down-arrow.svg';
import './styles.scss';

// eslint-disable-next-line import/prefer-default-export
export function Navbar() {
  const location = useLocation();
  const url = location.pathname;
  return (
    <header>
      <ul className="nav-bar">
        <div className="brand">
          <PokeballSvg className="pokeball" />
          <span>React-Pokedex</span>
        </div>
        <li className={url.includes('/page') ? 'active' : ''}>
          <a href="/page/1">Home</a>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropdown-button" type="button">
              Generations
              <DownArrow width="16" height="16" />
            </button>
            <div className="dropdown-content">
              <a href="/generations/1" className={url === '/generations/1' ? 'active' : ''}>generation I</a>
              <a href="/generations/2" className={url === '/generations/2' ? 'active' : ''}>generation II</a>
              <a href="/generations/3" className={url === '/generations/3' ? 'active' : ''}>generation III</a>
              <a href="/generations/4" className={url === '/generations/4' ? 'active' : ''}>generation IV</a>
              <a href="/generations/5" className={url === '/generations/5' ? 'active' : ''}>generation V</a>
              <a href="/generations/6" className={url === '/generations/6' ? 'active' : ''}>generation VI</a>
              <a href="/generations/7" className={url === '/generations/7' ? 'active' : ''}>generation VII</a>
              <a href="/generations/8" className={url === '/generations/8' ? 'active' : ''}>generation VIII</a>
            </div>
          </div>
        </li>
        <li className={url === '/favorites' ? 'active' : ''}><a href="/favorites">Favorites</a></li>
        <li className={url === '/about' ? 'active' : ''}><a href="/about">About</a></li>

      </ul>
      <button type="button" className="hamburguer-button">
        <div className="one" />
        <div className="two" />
        <div className="three" />
      </button>
    </header>
  );
}
