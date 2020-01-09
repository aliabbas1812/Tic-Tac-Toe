import React from 'react';
import logo from './logo.svg';
import Board from './Board';
import Game from "./Game";
import CalculateWinner from './CalculateWinner';
export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  