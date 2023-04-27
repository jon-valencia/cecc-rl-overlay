import { useSelector } from 'react-redux';
import ReplayBug from './ReplayBug';

import './replaybug.css';

function ReplayBugApp() {
  const goal = useSelector((state) => state.goal);
  const gameinfo = useSelector((state) => state.gameinfo);
  const gamestate = useSelector((state) => state.gamestate);

  if (gameinfo.isReplay === true) {
    return (
      <div className="replaybug">
        <ReplayBug goal={goal} gamestate={gamestate}/>
      </div>
    )
  } else {
    return <div className="replaybug"></div>
  }
}

export default ReplayBugApp;