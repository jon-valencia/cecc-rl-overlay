import React from 'react';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:6969', {
    withCredentials: true,
});

socket.on('connect', () => {
    socket.emit('join', 'REACTLOCAL')
    socket.emit('watchGame')
});

const SocketContext = React.createContext(socket);

export default SocketContext;
