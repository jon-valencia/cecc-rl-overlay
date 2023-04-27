import { io } from 'socket.io-client';
import { createContext } from 'react';

const socket = io('http://localhost:6969', {
    withCredentials: true,
});

socket.on('connect', () => {
    socket.emit('join', 'REACTLOCAL')
    socket.emit('watchGame')
});

const SocketContext = createContext(socket);

export default SocketContext;