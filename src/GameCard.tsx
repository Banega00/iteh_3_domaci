import { FC, ReactElement } from "react";
import { FaDesktop, FaLinux, FaPlaystation, FaXbox } from 'react-icons/fa';
import { SiNintendo3Ds } from 'react-icons/si'

const GameCard: FC<any> = ({ game }) => {

    return (
        <div className="text-white w-1/5 m-4 bg-black h-72 rounded-xl overflow-hidden">
            <div className="bg-white h-1/2">
                <img src={game.background_image} className="h-full w-full object-cover" alt="" />
                <div className="bg-green-800 text-center h-1/5">{game.name}</div>
                <div className="p-1 text-sm">
                    <div className="flex justify-end">
                        {game.parent_platforms.map((platform: any) =>
                            <div className="ml-2">
                                {maapPlatformToIcon(platform.platform.slug, 16)}
                            </div>)}
                    </div>
                    <div>Release date: {game.released}</div>
                </div>
            </div>
        </div>
    );
}

function maapPlatformToIcon(iconName: string, size: number): ReactElement {
    const platforms: { [key: string]: ReactElement } = {
        "xbox": <FaXbox size={size} />,
        "playstation": <FaPlaystation size={size} />,
        "pc": <FaDesktop size={size} />,
        "nintendo": <SiNintendo3Ds size={size} />,
        "linux": <FaLinux size={size} />
    }
    return platforms[iconName];
}

export default GameCard;