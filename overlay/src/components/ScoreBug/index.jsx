import { useContext } from 'react';
import { SocketContext } from 'contexts/SocketContexts';

import ScoreBug from './ScoreBug';
import './scorebug.css';

import isEmpty from 'functions/isEmpty';

function ScoreBugApp() {
  const [state] = useContext(SocketContext);
  if(!isEmpty(state.game)) {
    return (
      <div className="scorebug">
        <ScoreBug game={state.game}/>
      </div>
    )
  }
}

export default ScoreBugApp;