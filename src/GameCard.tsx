import { FC, ReactElement } from "react";
import { FaDesktop, FaLinux, FaPlaystation, FaXbox, FaApple, FaAppStoreIos } from 'react-icons/fa';
import { SiNintendo3Ds } from 'react-icons/si'
import {DiAndroid} from 'react-icons/di'

const GameCard: FC<any> = ({ game }) => {

    return (
        <div className="text-white w-1/5 m-7 mb-20 bg-gray-800 h-80 rounded-xl overflow-hidden
        shadow-xl shadow-green-700
        hover:scale-105 hover:shadow-green-500
        transition-all cursor-pointer">
            <div className="h-1/2">
                <img src={game.background_image} className="h-full w-full object-cover" alt="" />


            </div>
            <div className="flex justify-end flex-col h-1/2 p-3">
                <div className="text-white text-2xl font-semibold break-normal">{game.name}</div>
                <div className="p-1 text-sm">
                    <div className="flex justify-start my-3">
                        {game.parent_platforms.map((platform: any) =>
                            <div className="mr-2">
                                {mapPlatformToIcon(platform.platform.slug, 19, "#49c96b")}
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapPlatformToIcon(iconName: string, size: number, color: string): ReactElement {
    const platforms: { [key: string]: ReactElement } = {
        "xbox": <FaXbox size={size} color={color}/>,
        "playstation": <FaPlaystation size={size} color={color} />,
        "pc": <FaDesktop size={size} color={color}/>,
        "nintendo": <SiNintendo3Ds size={size} color={color}/>,
        "linux": <FaLinux size={size} color={color}/>,
        "mac": <FaApple size={size} color={color}/>,
        "android": <DiAndroid size={size} color={color}/>,
        "ios": <FaAppStoreIos size={size} color={color}/>
    }
    return platforms[iconName];
}

export default GameCard;