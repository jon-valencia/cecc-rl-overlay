import { SocketContext } from 'contexts/SocketContexts';
import { useSelector } from 'react-redux';

import ScoreBug from './ScoreBug';
import './scorebug.css';

import isEmpty from 'functions/isEmpty';

function ScoreBugApp() {
  const gameinfo = useSelector((state) => state.gameinfo); 
  const gamestate = useSelector((state) => state.gamestate);
  const sbElements = useSelector((state) => state.payload.control); 
  
  if(!isEmpty(gameinfo.teams[0]) && !isEmpty(gameinfo.teams[1])) {
    return (
      <div className="scorebug">
        <ScoreBug gameinfo={gameinfo} gamestate={gamestate} sbElements={sbElements} />
      </div>
    );
  } else {
    return <div className="scorebug"></div>
  }
};

export default ScoreBugApp;