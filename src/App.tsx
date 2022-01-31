import { FC, useEffect, useState } from 'react';
import './App.css';
import GameCard from './GameCard';
import { HttpClient } from './utils/http-client';

const App: FC = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    HttpClient.getGames().then(games => setGames(games));
  }, []);

  return (
    <>
      <div className='px-24 bg-black opacity-80 flex items-end h-80'>
        <div className='text-white text-[7rem] font-medium'>Game</div>
        <div className='text-green-700 text-[7rem] font-bold'>HUB</div>
      </div>
      <div className='flex-row flex flex-wrap px-8 pt-16 justify-center bg-gray-800'>
        {games.map((game: any, index) => <GameCard game={game} key={game.id} />)}
      </div>
    </>
  );
}

export default App;
