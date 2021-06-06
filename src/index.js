import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';


const Square = (props) => {
  const [value, setValue] = useState(null);
  return (

    <button className='square' onClick={props.onclicking}   >{props.value}</button>
  );
};




const Board = () => {

  const list = [null, null, null, null, null, null, null, null, null];
  const [squares, setsquare] = useState(list);
  const [xisnext, isxnext] = useState(true);

  const handleClick = (i) => {
    const list1 = [...squares];
    if (list1[i] == null && !winner(squares)) {
      list1[i] = xisnext ? 'X' : "O";
      setsquare(list1);
      isxnext(!xisnext);
    }

  };


 

  const win = winner(squares);
  const status = win ? ('WINNER: ' + win) : (xisnext ? 'NEXT PLAYER:X' : 'NEXT PLAYER:O');

  const rendersqare = (i) => {
    return (
      <Square value={squares[i]} onclicking={() => handleClick(i)} />
    );
  };

  return (
    <div className='board'>
      {status}
      <div className='row-square'>{rendersqare(0)} {rendersqare(1)}{rendersqare(2)} </div>
      <div className='row-square'>{rendersqare(3)}{rendersqare(4)}{rendersqare(5)}  </div>
      <div className='row-square'>{rendersqare(6)} {rendersqare(7)}{rendersqare(8)}  </div>
    </div>
  );
};

function winner(list) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let line of lines) {
    const [a, b, c] = line;
    if (list[a] && list[a] == list[b] && list[a] == list[c]) {
      return list[a];
    }
  }
  return null;

}



const Game = () => {
  return (
    <div className='game'>
      TIC-TAC-TOE
      <Board />

    </div>
  );
};

ReactDom.render(<Game />, document.getElementById('root'));