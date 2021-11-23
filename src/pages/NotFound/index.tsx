import React from 'react';

import PikachuImg from '../../assets/pikachu-what.gif';

import './styles.scss';

export function NotFound() {
  return (
    <div id="page-not-found">
      <div className="container">
        <div className="content">
          <h1>Error 404!</h1>
          <h2>Oops... page not found!</h2>
          <span>
            Please return to the home page clicking on the button bellow!
          </span>
          <a href="/">Click Here</a>
        </div>
        <img className="pikachu-img" src={PikachuImg} alt="pikachu gif of 'what?'" />
      </div>
    </div>
  );
}
