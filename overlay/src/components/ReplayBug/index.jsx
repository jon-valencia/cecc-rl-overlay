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

  let theme = 'assets/replaybug/default.svg'

  if (!isEmpty(players)) {
    if (gameinfo.isReplay === true) {
      return (
        <div className="replaybug">
          <ReplayBug goal={goal} gamestate={gamestate}/>
        </div>
      )
    }
  } else {
    return (
      <div className="replaybug">
        <SvgLoader path={theme}>
          <SvgProxy selector="#goalIcon" href="assets/icons/stat-icons/goal.svg"/>
          <SvgProxy selector="#assistIcon" href="assets/icons/stat-icons/assist.svg" />
          <SvgProxy selector="#mcdsLogo" href="assets/replaybug/mcds.png"/>
          <SvgProxy selector="#scorer">COLTOON2000</SvgProxy>
          <SvgProxy selector="#assister">CLUTCHKEY</SvgProxy>
        </SvgLoader>
      </div>
    )
  }
}

export default ReplayBugApp;