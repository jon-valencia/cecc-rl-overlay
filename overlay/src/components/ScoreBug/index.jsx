/*import { useContext, useEffect, useState } from 'react';
import SocketContext from '../../contexts/SocketContexts';

import isEmpty from '../../functions/isEmpty';

import ScoreBug from './ScoreBug';


function ScoreBugApp() {
  const socket = useContext(SocketContext);
  const [gamestate, setGamestate] = useState({game:{}, players:{}});
  useEffect(() => {
    socket.on('update', (update) => {
      if (update.event === 'game:update_state') {
        setGamestate({ ...gamestate,
        lobbyinfo: {...update.data }, 
        game:{ ...update.data.game }, 
        players: update.data.players && { ...update.data.players } });
      }
    });
  }, []);
  return (
    !isEmpty(gamestate.game) && (
        <ScoreBug game={gamestate.game} />
    )
  );
}

export default ScoreBugApp;*/