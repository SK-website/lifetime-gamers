import React from 'react';
import './App.css';
import GamesList from './app/components/gamesList/GamesList';
import Header from './app/components/header/Header';
import PageButton from './app/components/pageButton/PageButton';

function App() {
  return (
    <div className="app">
      <Header />
      <GamesList />
    </div>
  );
}

export default App;
