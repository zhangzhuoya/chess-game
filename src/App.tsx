import React from 'react';
import { BoardComp } from './components/BoardComp';
import { ChessType } from './types/enums'
let board = [
  ChessType.none,
  ChessType.red,
  ChessType.black,
  ChessType.none,
  ChessType.red,
  ChessType.black,
  ChessType.none,
  ChessType.red,
  ChessType.black
]
let isOver:Boolean = false
function App() {
  return (
    <div className="App">
      <BoardComp board={board} isOver={isOver} onClick={()=>{
        console.log('dianjile ');
        
      }}></BoardComp>
    </div>
  );
}

export default App;
