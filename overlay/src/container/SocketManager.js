import { useEffect, useContext, useState } from 'react';
import { io } from 'socket.io-client';
import { SocketContext } from 'contexts/SocketContexts';

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
        game: {...game },
        gamestate: {
          inProgress: gamestate.inProgress,
          id: gamestate.id
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
        // game object
        setGame({ ...update.data.game });
        // gamestate object
        const info = {
          inProgress: update.data.hasGame,
          id: update.data.match_guid
        }
        setGamestate({ ...info }) 
        if(!isEmpty(update.data.players)) {
          // player object
          setPlayers({...update.data.players && { ...update.data.players }});
          if(update.data.game.hasTarget !== false) {
            // update spec'd player stats/info
            let target = update.data.game.target;
            const spec = {
              player: update.data.players[target].name,
              team: update.data.players[target].team,
              score: update.data.players[target].score,
              goals: update.data.players[target].goals,
              assists: update.data.players[target].assists,
              saves: update.data.players[target].saves,
            }
            setSpecPlayer({ ...spec })
          }
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