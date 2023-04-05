import { useContext } from 'react';
import { SocketContext } from 'contexts/SocketContexts';

import ScoreBug from './ScoreBug';
import './scorebug.css';

function ScoreBugApp() {
  const [state] = useContext(SocketContext);
  return (
    <div className="scorebug">
      <ScoreBug/>
    </div>
  )
}

export default ScoreBugApp;