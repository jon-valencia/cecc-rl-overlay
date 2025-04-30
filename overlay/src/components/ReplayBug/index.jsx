import { SvgLoader, SvgProxy } from 'react-svgmt';
import { useSelector } from 'react-redux';
import ReplayBug from './ReplayBug';

import isEmpty from 'functions/isEmpty';

import './replaybug.css';

function ReplayBugApp() {
  const goal = useSelector((state) => state.goal);
  const gameinfo = useSelector((state) => state.gameinfo);
  const gamestate = useSelector((state) => state.gamestate);
  const players = useSelector((state) => state.players.players);
  const control = useSelector((state) => state.payload.control);

  let theme = 'assets/replaybug/default.svg'
  let border = 'assets/replaybug/ani-border.mov'

  if (!isEmpty(players)) {
    if (gameinfo.isReplay === true) {
      return (
        <div className="replay"> 
          
          <ReplayBug id="replaybug" goal={goal} gamestate={gamestate} control={control}/>
        </div>
      )
    }
  } else {
    return (
      <div className="replay">
        
        <SvgLoader path={theme} className="replaybug">
          <SvgProxy selector="#goalIcon" href="assets/icons/stat-icons/goal.svg"/>
          <SvgProxy selector="#assistIcon" href="assets/icons/stat-icons/assist.svg" />
          <SvgProxy selector="#scorer">COLTOON2000</SvgProxy>
          <SvgProxy selector="#assister">CLUTCHKEY</SvgProxy>
        </SvgLoader>
      </div>
    )
  }
}

export default ReplayBugApp;