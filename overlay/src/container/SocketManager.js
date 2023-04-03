import { useEffect, useContext } from 'react';
import socketIOClient from 'socket.io-client';
import { SocketContext } from 'contexts/SocketContexts';

/*
import HandleGame from 'handlers/HandleGame';
import HandlePlayers from 'handlers/HandlePlayers';
import HandleSpecPlayer from 'handlers/HandleSpecPlayer';*/

import isEmpty from 'functions/isEmpty';

const SocketManager = (props) => {

  //const socket = useContext(SocketContext);
  const [state, setState] = useContext(SocketContext);

  const [game, setGame] = useState({});
  const [players, setPlayers] = useState({});
  const [specPlayer, setSpecPlayer] = useState({});

  const socket = socketIOClient('http://localhost:6969', {
    withCredentials: true,
  });

  socket.on('connect', () => {
    socket.emit('join', 'REACTLOCAL')
    socket.emit('watchGame')
  });

  useEffect(() => {
    setState({
      ...state,
      game: { ...game },
      players: { ...players }
    })
  }, []);
  
  useEffect(() => {
    socket.on('update', (update) => {
      if (update.event === 'game:update_state') {
        setGame({ ...update.data.game });
        if(!isEmpty(update.data.players)) {
          setPlayers({ ...update.data.players });
          //setSpecPlayer()
        }
      }
    });
  }, []);

  return props.children

}

export default SocketManager;