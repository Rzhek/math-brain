import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Game from './Components/Game';
import MainMenu from './Components/MainMenu';

export const GameRunContext = createContext({gameRun: false, setGameRun: (state: boolean) => {}});

function App() {
  const [gameRun, setGameRun] = useState(false);
  console.log(gameRun);
  return (
    <GameRunContext.Provider value={{gameRun, setGameRun}} >
      <div className='h-full text-white max-w-[1240px] m-auto px-8'>
        <Header />
        {
          !gameRun ? <MainMenu /> : <Game />
        }
      </div>
    </GameRunContext.Provider>
  );
}

export default App;
