import { useContext, useEffect, useState } from 'react';
import SocketContext from './contexts/SocketContexts';
import './App.css';

import isEmpty from './functions/isEmpty';
import ScoreBug from './components/ScoreBug';
import PlayerCard from './components/PlayerCard';


function App() {
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
    <div className="App">
      <ScoreBug game={gamestate.game}/>
      {!isEmpty(gamestate.players) && Object.keys(gamestate.players).map((id) => {
        return (
          <PlayerCard player={gamestate.players[id]} />
        )
      })}
    </div>
  );
}

export default App;
