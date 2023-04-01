import { useEffect, useContext, useState } from 'react';

import SocketContext from 'contexts/SocketContexts';

const SocketManager = () => {
    
    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on('update', (update) => {
          if (update.event === 'game:update_state') {
            
          }
        });
    }, []);

}

export default SocketManager;