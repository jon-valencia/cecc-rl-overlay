import { useContext } from 'react';
import { SocketContext } from 'contexts/SocketContexts';

import ScoreBug from './ScoreBug';
import './scorebug.css';

import isEmpty from 'functions/isEmpty';

function ScoreBugApp() {
  const [state] = useContext(SocketContext);
  if(!isEmpty(state.game) && !isEmpty(state.gamestate) && !isEmpty(state.tournamentInfo)) {
    return (
      <div className="scorebug">
        <ScoreBug game={state.game} gamestate={state.gamestate} tournamentInfo={state.tournamentInfo}/>
      </div>
    );
  }
};

export default ScoreBugApp;