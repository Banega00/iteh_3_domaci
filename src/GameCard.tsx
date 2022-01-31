import { FC } from "react";


const GameCard: FC<any> = ({ game }) => {
    return (
        <div className="text-white w-1/5 m-4 bg-black h-72 rounded-xl overflow-hidden">
            <div className="bg-white h-1/2">
                <img src={game.background_image} className="h-full w-full object-cover" alt="" />
                <div className="bg-green-800 text-center h-1/5">{game.name}</div>
            </div>
        </div>
    );
}

export default GameCard;