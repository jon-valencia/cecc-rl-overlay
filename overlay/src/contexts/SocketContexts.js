import { createContext, useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

import SocketManager from 'container/SocketManager';

/*
const socket = socketIOClient('http://localhost:6969', {
    withCredentials: true,
});

socket.on('connect', () => {
    socket.emit('join', 'REACTLOCAL')
    socket.emit('watchGame')
});
*/

//export const SocketContext = createContext(socket);
export const SocketContext = createContext({});

const SocketContextProvider = (props) => {
    const [state, setState] = useState({
        game: {},
        players: {},
        /*specPlayer: {
            player: '',
            team: '',
            score: 0,
            goals: 0,
            assists: 0,
            saves: 0,
        }*/
    });

    return (
        <SocketContext.Provider value={[ state, setState ]}> 
            <SocketManager/>
            {props.children}
        </SocketContext.Provider>
    );
}

export default SocketContextProvider;