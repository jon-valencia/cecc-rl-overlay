import { useContext } from 'react';
import { SocketContext } from 'contexts/SocketContexts';

import ScoreBug from './ScoreBug';
import './scorebug.css';

import isEmpty from 'functions/isEmpty';

function ScoreBugApp() {
  const [state] = useContext(SocketContext);
  if(!isEmpty(state.game) && !isEmpty(state.gamestate)) {
    return (
      <div className="scorebug">
        <ScoreBug game={state.game} gamestate={state.gamestate}/>
      </div>
    );
  }
};

export default ScoreBugApp;