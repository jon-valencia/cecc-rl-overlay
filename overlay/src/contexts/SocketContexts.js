import { createContext, useState } from 'react';

import SocketManager from 'container/SocketManager';

export const SocketContext = createContext();

const SocketContextProvider = (props) => {
    // Global Context Object
    const [state, setState] = useState({
        game: {},
        gamestate: {
            inProgress: false,
            match_id: 0,
        },
        players: {},
        specPlayer: {
            player: '',
            team: 0,
            score: 0,
            goals: 0,
            assists: 0,
            saves: 0,
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