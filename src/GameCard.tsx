import { FC } from "react";


const GameCard: FC<any> = ({ game }) => {
    return (
        <div className="text-white w-1/5 m-5 bg-black h-40 ">{game.name}</div>
    );
}

export default GameCard;