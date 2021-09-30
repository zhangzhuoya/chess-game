import React from 'react';
import { ChessComp } from './components/ChessComp';
import { ChessType } from './types/enums'

function App() {
  return (
    <div className="App">
      <ChessComp type={ChessType.red} onClick={()=>{console.log('点击了')}}></ChessComp>
    </div>
  );
}

export default App;
