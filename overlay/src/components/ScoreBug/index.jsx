import { SvgLoader, SvgProxy } from 'react-svgmt';
//import { SocketContext } from 'contexts/SocketContexts';
import { useSelector } from 'react-redux';

import ScoreBug from './ScoreBug';
import './scorebug.css';

import isEmpty from 'functions/isEmpty';

function ScoreBugApp() {
  const gameinfo = useSelector((state) => state.gameinfo); 
  const gamestate = useSelector((state) => state.gamestate);
  const sbElements = useSelector((state) => state.payload.control);
  let theme = 'assets/scorebug/defaultBO5.svg'; 

  let team1SeriesScore = 1;
  let team2SeriesScore = 4;
  
  if (!isEmpty(gameinfo.teams[0]) && !isEmpty(gameinfo.teams[1])) {
    return (
      <div className="scorebug">
        <ScoreBug gameinfo={gameinfo} gamestate={gamestate} sbElements={sbElements} />
      </div>
    );
  } else {
    return (
      <div className="scorebug">
        <SvgLoader path={theme}>
          <SvgProxy selector="#team1Bo5Box1" fill={team1SeriesScore > 0 ? "white" : ""}/>
          <SvgProxy selector="#team1Bo5Box2" fill={team1SeriesScore > 1 ? "white" : ""}/>
          <SvgProxy selector="#team1Bo5Box3" fill={team1SeriesScore > 2 ? "white" : ""}/>
          <SvgProxy selector="#team2Bo5Box1" fill={team2SeriesScore > 0 ? "white" : ""}/>
          <SvgProxy selector="#team2Bo5Box2" fill={team2SeriesScore > 1 ? "white" : ""}/>
          <SvgProxy selector="#team2Bo5Box3" fill={team2SeriesScore > 2 ? "white" : ""}/>
        </SvgLoader>
      </div>
    )
  }
};

export default ScoreBugApp;