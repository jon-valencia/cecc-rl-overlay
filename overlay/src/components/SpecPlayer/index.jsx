import { useContext } from 'react';
import { SocketContext } from 'contexts/SocketContexts';

import SpecPlayer from './SpecPlayer';
import './specplayer.css';

import isEmpty from 'functions/isEmpty';

function SpecPlayerApp() {
  const [state] = useContext(SocketContext);
  if(!isEmpty(state.specPlayer) && !isEmpty(state.gamestate) && !isEmpty(state.players)) {
    if(state.gamestate.hasTarget === true && state.game.isReplay === false) {
      return (
        <div className="specplayer">
          <SpecPlayer specPlayer={state.specPlayer} gamestate={state.gamestate}/>
        </div>
      )
    }
    else {
      <div className="specPlayer"></div>
    }
  };
}

export default SpecPlayerApp;