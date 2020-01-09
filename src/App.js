import React from 'react';
import logo from './logo.svg';
import Board from './Board';
import Square from './Square';
import Game from "./Game";
import CalculateWinner from './CalculateWinner';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Board></Board>
        <Square></Square>
        <Game></Game>
        <CalculateWinner></CalculateWinner>
        
        
        
      
        
      </header>
    </div>
  );
}

export default App;
