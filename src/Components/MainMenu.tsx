import React, { useContext } from 'react';
import { GameRunContext } from '../App';

function MainMenu() {
  const {setGameRun} = useContext(GameRunContext);
  const startGame = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setGameRun(true)
  }

	return (
    <main className='mt-[10vh] mx-auto h-[70vh] text-center p-4'>
      <h1 className='text-3xl font-bold mb-8'>Welcome!</h1>
      <button
        className='px-4 py-2 bg-white rounded-md text-black font-bold'
        onClick={startGame}>Start the Game
      </button>
    </main>
  )
}

export default MainMenu;
