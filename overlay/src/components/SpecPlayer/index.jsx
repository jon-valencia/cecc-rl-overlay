import { useContext } from 'react';
import { SocketContext } from 'contexts/SocketContexts';
import { useSelector } from 'react-redux';

import SpecPlayer from './SpecPlayer';
import './specplayer.css';

import isEmpty from 'functions/isEmpty';

function SpecPlayerApp() {
  //const [state] = useContext(SocketContext);
  const gameinfo = useSelector((state) => state.gameinfo);
  const specPlayer = useSelector((state) => state.specPlayer);
  const gamestate = useSelector((state) => state.gamestate);
  const players = useSelector((state) => state.players.players);

  if(!isEmpty(specPlayer) && !isEmpty(gamestate) && !isEmpty(players)) {
    if(gamestate.hasTarget === true && gameinfo.isReplay === false) {
      return (
        <div className="specplayer">
          <SpecPlayer specPlayer={specPlayer} gamestate={gamestate}/>
        </div>
      )
    }
    else {
      <div className="specPlayer"></div>
    }
  };
}

export default SpecPlayerApp;