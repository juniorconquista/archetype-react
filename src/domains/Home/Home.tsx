import React from 'react';
import LOGO from './logo.svg';
import './home.styled.css';

const Home: React.FC = () => (
  <div className="Home">
    <header className="Home-header">
      <img src={LOGO} className="Home-logo" alt="logo" />
      <p>
        Edit <code>src/domains/Home/Home.tsx</code> and save to reload.
      </p>
      <a
        className="Home-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default Home;
