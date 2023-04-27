import { createContext, useState } from 'react';

import SocketManager from 'container/SocketManager';
import ControlPanel from 'pages/ControlPanel';

export const SocketContext = createContext();

const SocketContextProvider = (props) => {
    // Global Context Object
    const [state, setState] = useState({
        game: {},
        gamestate: {
            inProgress: false,
            matchID: 0,
            playersLoaded: false,
            specPlayer: "",
            hasTarget: false,
            teamColors: [
                {
                    primary: "",
                    secondary: ""
                },
                {
                    primary: "",
                    secondary: ""
                }
            ]
        },
        players: {},
        specPlayer: {
            player: "",
            team: 0,
            score: 0,
            goals: 0,
            assists: 0,
            saves: 0,
            boost: 0
        },
        scorebugText: {
           bestOfChoice: "",
           gameInfo: "",
           seriesTitle: ""
        }
    });

    return (
        <SocketContext.Provider value={[ state, setState ]}> 
            <SocketManager/>
            {props.children}
        </SocketContext.Provider>
    );
}

export default SocketContextProvider;