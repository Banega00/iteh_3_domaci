import { FC, useEffect, useState } from "react";
import GameCard from "./GameCard";
import { HttpClient } from "./utils/http-client";

const Home:FC = ()=>{
    const [games, setGames] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 20;
    const numberOfPages = Math.ceil(count / resultsPerPage);
  
    useEffect(() => {
      HttpClient.getGames(currentPage).then(response => {
        setGames(response.results)
        setCount(response.count)
      });
    }, [currentPage]);

    return (
      <div className="bg-black">
        <div className='px-24 opacity-80 flex justify-end h-96
        bg-no-repeat bg-center bg-cover
        bg-banner-background shadow-xl shadow-green-500'>
                <div className='text-white text-[7rem] font-bold' style={{ textShadow: '4px 5px 6px black' }}>Game</div>
                <div className='text-green-600 text-[7rem] font-black' style={{ textShadow: '4px 5px 6px black' }}>HUB</div>
        </div>
        <div className='flex-row flex flex-wrap px-8 pt-16 justify-center'>
          {games.map((game: any, index) => <GameCard game={game} key={game.id}/>)}
        </div>
        <div className="text-white flex justify-center pb-16 ">
          <nav>
            <ul className="inline-flex bg-green-600 rounded-r-lg rounded-l-lg shadow-lg shadow-green-500">
              <li><button onClick={() => setCurrentPage(1)} className="h-10 px-5 text-black transition-colors duration-150 bg-green-600 hover:bg-green-400 hover:text-white text-2xl rounded-l-lg">{'<'}</button></li>
              {[...Array(numberOfPages)].map( (_, pageNumber) => shouldRenderPageNumber(pageNumber+1) ?
                <li><button onClick={() => setCurrentPage(pageNumber+1)} className="h-10 px-5 text-black transition-colors duration-150 bg-green-600 cursor-pointer hover:bg-green-400" style={{color: pageNumber+1===currentPage ? 'white' : 'black'}}>{pageNumber+1}</button></li> : '')}
  
  
              <li><button className="h-10 px-5 text-black transition-colors duration-150 bg-green-600 cursor-auto">...</button></li>
  
  
              <li><button className="h-10 px-5 text-black transition-colors duration-150 bg-green-600 hover:bg-green-400 hover:text-white">{numberOfPages}</button></li>
              <li><button onClick={() => setCurrentPage(numberOfPages)} className="h-10 px-5 text-black transition-colors duration-150 bg-green-600 hover:bg-green-400 hover:text-white text-2xl rounded-r-lg">{'>'}</button></li>
            
            </ul>
          </nav>
  
        </div>
      </div>
    );
  
    function shouldRenderPageNumber(pageNumber:number){
      return Math.abs(currentPage-pageNumber)<=1
    }
}

export default Home;