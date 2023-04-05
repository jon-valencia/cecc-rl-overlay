import { useEffect, useContext, useState } from 'react';
import { io } from 'socket.io-client';
import { SocketContext } from 'contexts/SocketContexts';

import handleGame from 'handlers/handleGame';
import handleGameState from 'handlers/handleGameState';
import handlePlayers from 'handlers/handlePlayers';
import handleSpecPlayer from 'handlers/handleSpecPlayer';

import isEmpty from 'functions/isEmpty';

const SocketManager = (props) => {

  const [state, setState] = useContext(SocketContext);

  const [gamestate, setGamestate] = useState({});
  const [game, setGame] = useState({});
  const [players, setPlayers] = useState({});
  const [specPlayer, setSpecPlayer] = useState({});

  useEffect(() => {
    if(!isEmpty(game) && !isEmpty(players) && !isEmpty(specPlayer) && !isEmpty(gamestate)) {
      setState({
        ...state,
        game: { ...game },
        gamestate: {
          inProgress: gamestate.inProgress,
          matchID: gamestate.matchID
        },
        players: { ...players },
        specPlayer: { 
          player: specPlayer.player,
          team: specPlayer.team,
          score: specPlayer.score,
          goals: specPlayer.goals,
          assists: specPlayer.assists,
          saves: specPlayer.saves
        }
      })
    }
  // eslint-disable-next-line
  },[game, players, specPlayer, gamestate])
  
  const subRocketSocket = async () => {
    const socket = io('http://localhost:6969', {
      withCredentials: true,
    });

    socket.on('connect', () => {
      socket.emit('join', 'REACTLOCAL')
      socket.emit('watchGame')
    });

    socket.on('update', (update) => {
      if (update.event === 'game:update_state') {
        setGame(handleGame(update));
        setGamestate(handleGameState(update));
        if(!isEmpty(update.data.players)) {
          setPlayers(handlePlayers(update));
          setSpecPlayer(handleSpecPlayer(update));
        }
      }
    });
  }
  
  useEffect(() => {
    subRocketSocket();
  },[]);

  return props.children

}

export default SocketManager;