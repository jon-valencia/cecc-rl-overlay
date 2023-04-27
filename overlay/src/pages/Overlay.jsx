//import SocketContextProvider from 'contexts/SocketContexts';
import ScoreBugApp from 'components/ScoreBug/index';
import PlayerCardApp from 'components/PlayerCards/index';
import SpecPlayerApp from 'components/SpecPlayer/index';
import ReplayBugApp from 'components/ReplayBug';

function Overlay() {  
  return (
    <div className="overlay-container">
      <ScoreBugApp/>
      <PlayerCardApp/>
      <SpecPlayerApp/>
      <ReplayBugApp/>
    </div>
  );
}

export default Overlay;