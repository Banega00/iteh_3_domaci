import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HttpClient } from "./utils/http-client";

const GameDetails:FC = () =>{
    const { id:gameId } = useParams();
    const [gameDetails, setGameDetails] = useState();
    useEffect(() => {
        HttpClient.getGameDetails(gameId!).then((response:any) => {
            setGameDetails(response);
        });
      }, [gameId]);
    return(
        <div>{gameId}</div>
    );
}

export default GameDetails;